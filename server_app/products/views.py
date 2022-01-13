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
            print(request.data)
            user = User.objects.get(pk=request.data['userId'])
            title = request.data['title']
            description = request.data['description']
            sub_category = ProductSubCategory.objects.get(pk=request.data['sub_category'])
            category = ProductCategory.objects.get(pk=request.data['category'])
            selling_price = request.data['selling_price']
            offer_price = request.data['offer_price']
            stock = request.data['stock']
            slug = request.data['slug']
            upload_product = product(seller = user, Title = title, description= description, category=category, sub_category=sub_category,selling_price=selling_price,offer_price=offer_price, slug=slug, stock = stock)

            upload_product.save()
            return super(ProductsViewSet, self).create(request, *args, **kwargs)
class ProductsCategoryViewSet(ModelViewSet):
    serializer_class = ProductsCategorySerializer
    queryset = ProductCategory.objects.all()

class ReviewViewSet(ModelViewSet):
    serializer_class = CustomerReviewSerializer
    queryset = CustomerReview.objects.all()
