from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField
from django.db.models.fields.related import ForeignKey

from products.models import product
choice_list = (
    ('slider','Slider'),
    ('menu','Menu'),
    ('specialdiscount','Special Discount'),
)

class FeaturedProducts(models.Model):
    product = models.ForeignKey(product, on_delete=CASCADE)
    type = models.CharField(max_length=100, choices = choice_list, null=True, blank= True)
