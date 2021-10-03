from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter

from. views import *

router = DefaultRouter()
router.register("/products", FeaturedProductsViewSet, basename="products")


urlpatterns = [
    
] + router.urls
