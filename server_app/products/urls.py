from django.template.defaultfilters import register
from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter

from . views import *

router = DefaultRouter()
router.register("allproducts", ProductsViewSet, basename="allproducts"),
router.register("vendors-product", VendorsProduct, basename="vendorsProduct"),
router.register("categories", ProductsCategoryViewSet, basename="categories"),
router.register("rating", ReviewViewSet, basename="rating"),


urlpatterns = [
    # path('vendors-product/', VendorsProduct.as_view()),
    # path('vendors-product/<pk>/',VendorsProduct, name="VendorsProduct"),
] + router.urls
