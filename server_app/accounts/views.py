from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from . models import *
from . serializers import *
from rest_framework import parsers
from rest_framework.response import Response



class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        data = request.data
        get_username = data['username']
        get_firstname = data['firstname']
        get_lastname = data['lastname']
        user.username = get_username
        user.firstname = get_firstname
        user.lastname = get_lastname
        user.save()
        
        serializer = UserSerializer(user)
        return Response(serializer.data)



