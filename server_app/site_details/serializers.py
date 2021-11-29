from django.db.models import fields
from rest_framework.relations import PrimaryKeyRelatedField, RelatedField
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer, HyperlinkedIdentityField
from . models import *


class WebsiteDetailSerializer(ModelSerializer):
    class Meta:
        model = WebsiteDetail
        fields = '__all__'

class PartnerProgramSerializer(ModelSerializer):
    class Meta:
        model = PartnerProgram
        fields = '__all__'

class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class ExplainationsSerializer(ModelSerializer):
    class Meta:
        model = Explainations
        fields = '__all__'

class FAQSerializer(ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

class FaqSubSectionSerializer(ModelSerializer):
    class Meta:
        model = FaqSubSection
        fields = '__all__'