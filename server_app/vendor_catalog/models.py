
from django.db import models
from django.template.defaultfilters import slugify
from accounts.models import *
from products.models import *

import random
uid = random.randint(10001, 100011000110001)
class Seller(models.Model):
    user = models.OneToOneField(User, on_delete=CASCADE, related_name="root_user")
    shop_name = models.CharField(max_length=100, default="unknown")
    date_of_join = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)
    

    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.shop_name+"-"+str(uid)+"-"+str(self.verified))
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.user.email+"-"+str(self.verified)


from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def create_seller(sender, instance, created, **kwargs):
    if Seller.objects.filter(user= instance).exists() == False:
        if created == False and instance.is_vendor == True:
            Seller.objects.create(user = instance)

class ShopInfo(models.Model):
    shop_owner = models.OneToOneField(Seller, on_delete=CASCADE, related_name="shop_root")
    primary_logo = models.ImageField(upload_to='logo')
    primary_background = models.ImageField(upload_to='vendor/background', null=True)
    short_description = models.TextField(max_length=200, null=True)

    def __str__(self):
        return self.shop_owner.shop_name+"'s info"

@receiver(post_save, sender=Seller)
def create_shop_profile(sender, instance, created, **kwargs):
    if ShopInfo.objects.filter(shop_owner= instance).exists() == False:
        if created == True:
            ShopInfo.objects.create(shop_owner = instance)