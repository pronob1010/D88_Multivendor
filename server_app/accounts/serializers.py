from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from.models import *

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ('is_active', 'user_permissions','groups')
        extra_kwargs = {
            "password" : {"write_only" : True, "style":{"input_type":"password"}}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            email = validated_data['email'],
            password = validated_data["password"],
        )
        return user