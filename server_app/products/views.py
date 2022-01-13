from django.db import models
from django.db.models import query
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.generics import ListAPIView, RetrieveAPIView
from.serializers import *
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
class ProductsViewSet(ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = product.objects.all()
    def create(self, request, *args, **kwargs):
        if request.data.get('id'):
            return super(ProductsViewSet, self).update(request, *args, **kwargs)
        else:
            return super(ProductsViewSet, self).create(request, *args, **kwargs)
class ProductsCategoryViewSet(ModelViewSet):
    serializer_class = ProductsCategorySerializer
    queryset = ProductCategory.objects.all()

class ReviewViewSet(ModelViewSet):
    serializer_class = CustomerReviewSerializer
    queryset = CustomerReview.objects.all()
