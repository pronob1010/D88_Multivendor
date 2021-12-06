from django.db.models import base
from django.urls import path
from rest_framework import routers
from . views import *

from rest_framework.routers import DefaultRouter
from.views import *

router = DefaultRouter()
router.register("sellers", SellerViewSet, basename="sellers")

urlpatterns = [
    
]+ router.urls
