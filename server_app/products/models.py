from django.contrib.admin.sites import site
from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import CASCADE, SET_NULL
from django.db.models.expressions import Value
from django.template.defaultfilters import default, slugify, title
import random
from django.utils.timezone import now

# Create your models here.
class ProductCategory(models.Model):
    title = models.CharField(max_length=50)
    image =  models.ImageField(upload_to='products/category/image', blank=True, null = True)
    slug = models.SlugField(unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title+"-"+str(random.randint(101, 1022222222))+"-"+str(random.randint(88, 80000000)))
        return super().save(*args,**kwargs)

    def __str__(self):
        return self.title

class ProductSubCategory(models.Model):
    base_category = models.ForeignKey(ProductCategory, on_delete=SET_NULL, null=True, related_name="subcat")
    title = models.CharField(max_length=50)
    image =  models.ImageField(upload_to='products/category/subCategory/image', blank=True, null = True)
    slug = models.SlugField(unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title+"-"+str(random.randint(101, 1022222222))+"-"+str(random.randint(88, 80000000)))
        return super().save(*args,**kwargs)

    def __str__(self):
        return self.title

from accounts .models import User

class product(models.Model):
    seller = models.ForeignKey(User, on_delete=models.CASCADE, null = True, related_name="seller")
    Title = models.CharField(max_length=200)   
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, blank= True, null = True)
    sub_category = models.ForeignKey(ProductSubCategory, on_delete=models.SET_NULL, blank= True, null = True)
    digital_item = models.BooleanField(default=False, blank=False)
    stock = models.PositiveIntegerField(default=0)
    selling_price = models.FloatField(default=0)
    offer_price = models.FloatField()
    offer_percent = models.IntegerField(blank=True, default=0)
    
    updated_on = models.DateTimeField(auto_now=True)
    created_on = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=500, default='This is product description.')
    image =  models.ImageField(upload_to='products/image', blank=True, null = True)
    
    @property
    def imageURL(self):
        try:
            url = self.productImg.url
        except:
            url= ''
        return url

    
    feature_title = models.CharField(max_length=200, null= True)
    
    def __str__(self):
        return self.Title  

    SKU = models.CharField(max_length=100, unique=True, null=True, blank=True)
    slug = models.SlugField(unique=True, null=True, blank=True)
    def save(self, *args, **kwargs):
        self.SKU = "SD"+str(self.id)+"SK"+str(self.stock)+"U"

        if not self.slug:
            self.slug = slugify(self.Title+"-"+str(random.randint(101, 1022222222)))

        if self.offer_price:
            self.offer_percent = (100-(100*float(self.offer_price)/float(self.selling_price)))
        return super().save(*args,**kwargs)
    

class Default_Product_Specifications(models.Model):
    product = models.ForeignKey(product, on_delete=CASCADE, related_name="default_specifications")
    model_number = models.CharField(max_length=50, null=True, blank=True)
    weight = models.FloatField(default=0, null=True, blank=True)
    color = models.CharField(max_length=50, null=True, blank=True)
    Brand = models.CharField(max_length=50, null=True, blank=True)

class Extra_Specifications(models.Model):
    product = models.ForeignKey(product, on_delete=CASCADE, related_name="extra_specifications")
    title = models.CharField(max_length=30, null=True, blank=True)
    value = models.CharField(max_length=45, null=True, blank=True)

rating_choice =(
    (1, "*"),
    (2, "**"),
    (3, "***"),
    (4, "****"),
    (5, "*****"),
)

from datetime import datetime
class CustomerReview(models.Model):
    product = models.ForeignKey(product, on_delete=CASCADE, related_name="c_review", null=True)
    customer = models.ForeignKey(User, on_delete=CASCADE)
    rating = models.PositiveIntegerField(choices = rating_choice, null=True)
    review = models.TextField(max_length=200, null=True, blank=True)
    updated_on = models.DateTimeField(auto_now=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True, null=True)
