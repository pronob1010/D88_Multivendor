from django.urls import path
from rest_framework import routers
from . views import *

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("sellers", sellerViewSet, basename="sellers"),
urlpatterns = [

] + router.urls
