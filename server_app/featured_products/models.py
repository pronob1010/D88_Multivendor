from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField
from django.db.models.fields.related import ForeignKey

from products.models import product
choice_list = (
    ('slider','Slider'),
    ('featured','Featured'),
    ('categories_menu','Categories Menu'),
    ('specialdiscount','Special Discount'),
)

class PromotionalProduct(models.Model):
    Select_Product = models.ForeignKey(product, on_delete=CASCADE, related_name="featured_products")
    type = models.CharField(max_length=100, choices = choice_list, null=True, blank= True)

    def __str__(self):
        return self.Select_Product.Title +" -- "+ self.type