from django.db import models
from django.db.models import query
from django.http import request
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.generics import ListAPIView, RetrieveAPIView
from.serializers import *
from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from rest_framework.response import Response

class ProductsViewSet(ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = product.objects.all()
    def create(self, request, *args, **kwargs):
        if request.data.get('id'):
            return super(ProductsViewSet, self).update(request, *args, **kwargs)
        else:
            user = User.objects.get(pk=request.data['userId'])
            title = request.data['title']
            description = request.data['description']
            sub_category = ProductSubCategory.objects.get(pk=request.data['sub_category'])
            category = ProductCategory.objects.get(pk=request.data['category'])
            selling_price = request.data['selling_price']
            offer_price = request.data['offer_price']
            stock = request.data['stock']
            digital_item = int(request.data['digital_item'])
            if digital_item == 1:
                digital_item = True
            else:
                digital_item = False
            upload_product = product(seller = user, Title = title, description= description, category=category, sub_category=sub_category,selling_price=selling_price,offer_price=offer_price, stock = stock, digital_item = digital_item)

            upload_product.save()
            return super(ProductsViewSet, self).create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        product = self.get_object()
        data = request.data
        get_title = data['title']
        get_description = data['description']
        get_selling_price = int(data['selling_price'])
        get_offer_price = int(data['offer_price'])
        get_stock = int(data['stock'])

        if get_title!="":
            product.Title= get_title
        if get_description!="":
            product.description = get_description
        if isinstance(get_selling_price, int) and get_selling_price != 0:
            product.selling_price = get_selling_price
        if isinstance(get_offer_price, int) and get_offer_price != 0:
            product.offer_price = get_offer_price
        if isinstance(get_stock, int) and get_stock != 0:
            product.stock = get_stock

        response_msg = {}
        try:
            product.save()
            response_msg["text"] = "Your product updated successfully!"
            response_msg["type"]= "success"
        except:
            response_msg["text"] = "Something went wrong!Your product didn't updated!"
            response_msg["type"]= "error"
        return Response(response_msg)

class VendorsProduct(ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = product.objects.all()
    # def get_queryset(self):
    #     user = User.objects.get(pk = 3)
    #     queryset = product.objects.filter(seller = user)
    #     return queryset


class ProductsCategoryViewSet(ModelViewSet):
    serializer_class = ProductsCategorySerializer
    queryset = ProductCategory.objects.all()

class ReviewViewSet(ModelViewSet):
    serializer_class = CustomerReviewSerializer
    queryset = CustomerReview.objects.all()
