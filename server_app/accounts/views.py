from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from . models import *
from . serializers import *

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()