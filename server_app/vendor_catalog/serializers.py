from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from . models import *

class ShopInfoSerializer(ModelSerializer):
    class Meta:
        model = ShopInfo
        fields = '__all__'

class SellerSerializer(ModelSerializer):
    shop_info = ShopInfoSerializer(source ="shop_root",many=True, read_only=True)

    class Meta:
        model = Seller
        fields = '__all__' 