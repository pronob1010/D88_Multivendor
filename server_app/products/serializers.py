from django.db.models import fields
from rest_framework.relations import PrimaryKeyRelatedField, RelatedField
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer, HyperlinkedIdentityField
from . models import *

class ProductsCategorySerializer(ModelSerializer):
    class Meta:
        model = ProductsCategory
        fields = '__all__'

class ProductsSubCategorySerializer(ModelSerializer):
    class Meta:
        model = ProductsSubCategory
        fields = '__all__'


class Default_Product_SpecificationsSerializer(ModelSerializer):
    class Meta:
        model = Default_Product_Specifications
        fields = '__all__'

class Extra_SpecificationsSerializer(ModelSerializer):
    class Meta:
        model = Extra_Specifications
        fields = '__all__'

class CustomerReviewSerializer(ModelSerializer):
    class Meta:
        model = CustomerReview
        fields = '__all__'


class ProductsSerializer(ModelSerializer):
    default_product_specifications = Default_Product_SpecificationsSerializer(source="default_specifications", many=True, read_only=True)
    extra_product_specifications = Extra_SpecificationsSerializer(source="extra_specifications", many=True, read_only=True)
    customer_review = CustomerReviewSerializer(source="c_review", many=True, read_only=True)
    class Meta:
        model = product
        fields = '__all__'