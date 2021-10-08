from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from.models import *
from products.models import *

class PromotionalProductsSerializer(ModelSerializer):

    class Meta:
        model = PromotionalProduct
        fields = '__all__'

