from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

# Create your views here.
from.serializers import *
from.models import *
class FeaturedProductsViewSet(ModelViewSet):
    serializer_class = FeaturedProductsSerializer
    queryset =  FeaturedProducts.objects.all()