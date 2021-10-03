from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

# Create your views here.
from.serializers import *
from.models import *
class PromotionalProductsViewSet(ModelViewSet):
    serializer_class = PromotionalProductsSerializer
    queryset =  PromotionalProducts.objects.all()