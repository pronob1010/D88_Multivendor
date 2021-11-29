from django.shortcuts import render
from rest_framework import serializers

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from . serializers import *
class sellerViewSet(ModelViewSet):
    serializer_class = SellerSerializer
    queryset = Seller.objects.all()