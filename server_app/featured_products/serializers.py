from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from.models import *
from products.models import *

class FeaturedProductsSerializer(ModelSerializer):

    class Meta:
        model = FeaturedProducts
        fields = '__all__'

