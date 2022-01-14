from rest_framework.viewsets import ModelViewSet
from . models import *
from . serializers import *
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        data = request.data
        get_firstname = data['firstname']
        get_lastname = data['lastname']
        get_phone = data['phone']
        get_home_address = data['home_address']

        if 'pro_pic' in request.data.keys():
            get_pro_pic = data['pro_pic']
            if get_pro_pic!="" and get_pro_pic is not None:
                user.profile_pic = get_pro_pic
        if get_firstname!="":
            user.firstname = get_firstname
        if get_lastname!="":
            user.lastname = get_lastname
        if get_phone!="":
            user.phone = get_phone
        if get_home_address!="":
            user.home_address = get_home_address
        response_msg = {}
        try:
            user.save()
            response_msg["text"] = "Your profile updated successfully!"
            response_msg["type"]= "success"
        except:
            response_msg["text"] = "Something went wrong!Your profile didn't updated!"
            response_msg["type"]= "error"
        return Response(response_msg)