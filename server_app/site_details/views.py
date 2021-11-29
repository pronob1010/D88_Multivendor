from django.db import models
from django.db.models import query
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.generics import ListAPIView, RetrieveAPIView
from.serializers import *
from rest_framework.viewsets import ModelViewSet



class PartnerProgramViewSet(ModelViewSet):
    serializer_class = PartnerProgramSerializer
    queryset = PartnerProgram.objects.all()

class AddressViewSet(ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()
    
class ExplainationsViewSet(ModelViewSet):
    serializer_class = ExplainationsSerializer
    queryset = Explainations.objects.all()
    
class FAQViewSet(ModelViewSet):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()
    
class FaqSubSectionViewSet(ModelViewSet):
    serializer_class = FaqSubSectionSerializer
    queryset = FaqSubSection.objects.all()

class WebsiteDetailViewSet(ModelViewSet):
    serializer_class = WebsiteDetailSerializer
    queryset = WebsiteDetail.objects.all()