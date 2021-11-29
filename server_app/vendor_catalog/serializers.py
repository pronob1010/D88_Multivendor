from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from . models import *     

# class ProductsSubCategorySerializer(ModelSerializer):
#     class Meta:
#         model = ProductSubCategory
#         fields = '__all__'



class ShopInfoSerializer(ModelSerializer):
    class Meta:
        models = ShopInfo
        fields = '__all__'

class SellerSerializer(ModelSerializer):
    # ShopInfo = ShopInfoSerializer
    class Meta:
        models = Seller
        fields = '__all__'