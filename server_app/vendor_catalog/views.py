from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
# Create your views here.
from .serializers import *
class SellerViewSet(ModelViewSet):
    serializer_class = SellerSerializer
    queryset = Seller.objects.all()

class ShopInfoViewSet(ModelViewSet):
    serializer_class = ShopInfoSerializer
    queryset = ShopInfo.objects.all()

    # print(queryset)
