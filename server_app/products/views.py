from django.db import models
from django.db.models import query
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.generics import ListAPIView, RetrieveAPIView
from.serializers import *
from rest_framework.viewsets import ModelViewSet

class ProductsViewSet(ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = product.objects.all()

class ProductsCategoryViewSet(ModelViewSet):
    serializer_class = ProductsCategorySerializer
    queryset = ProductCategory.objects.all()

class ReviewViewSet(ModelViewSet):
    serializer_class = CustomerReviewSerializer
    queryset = CustomerReview.objects.all()
    