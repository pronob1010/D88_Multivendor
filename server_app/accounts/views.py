from rest_framework.viewsets import ModelViewSet
from . models import *
from . serializers import *
from rest_framework.response import Response



class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        data = request.data
        get_firstname = data['firstname']
        get_lastname = data['lastname']
        user.firstname = get_firstname
        user.lastname = get_lastname
        get_phone = data['phone']
        get_home_address = data['home_address']
        user.phone = get_phone
        user.home_address = get_home_address
        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data)



