from django.db.models import fields
from rest_framework.relations import PrimaryKeyRelatedField, RelatedField
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer, HyperlinkedIdentityField
from . models import *



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

class FaqSubSectionSerializer(ModelSerializer):
    class Meta:
        model = FaqSubSection
        fields = '__all__'


class FAQSerializer(ModelSerializer):

    FaqSubSection = FaqSubSectionSerializer(source="faq_sub_section", many=True, read_only=True)
    class Meta:
        model = FAQ
        fields = '__all__'
class WebsiteDetailSerializer(ModelSerializer):
    partnerprogram = PartnerProgramSerializer(source="partnerprogram_source", many=True, read_only=True)
    address = AddressSerializer(source="address_source", many=True, read_only=True)
    explainations = ExplainationsSerializer(source="explainations_source", many=True, read_only=True)
    faq = FAQSerializer(source="faqs_source", many=True, read_only=True)
    class Meta:
        model = WebsiteDetail
        fields = '__all__'
