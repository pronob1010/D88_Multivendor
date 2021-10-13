from django.db import models

from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin, BaseUserManager)
from. usermanager import UserProfileManager 

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=30, unique=True)
    firstname = models.CharField(max_length=30, null=True, blank=True)
    lastname = models.CharField(max_length=30, null=True, blank=True)
    phone = models.CharField(max_length=14, null=True, blank=True)
    home_address = models.CharField(max_length=128, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_vendor = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    registerd = models.DateField(null=True, auto_now_add=True)

    objects = UserProfileManager()

    USERNAME_FIELD = "email"

    def __str__(self):
        if self.username:
            return self.username
        else:
            return self.email

class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=14)
    division = models.CharField(max_length=64)
    city = models.CharField(max_length=64)
    area = models.CharField(max_length=64)
    address = models.CharField(max_length=128)
    default_address = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)