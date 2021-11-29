from django.db import models
from django.db.models.deletion import CASCADE
from django.template.defaultfilters import default, slugify, title
import random



# Create your models here.
class WebsiteDetail(models.Model):
    site_title = models.CharField(max_length=200)
    primary_logo = models.ImageField(upload_to='logo')
    secondary_logo = models.ImageField(upload_to='logo', null=True, blank=True)
    fev_icon =  models.ImageField(upload_to='logo', null=True, blank=True)
    primary_background = models.ImageField(upload_to='background', null=True)
    secondary_background = models.ImageField(upload_to='background', null=True)
    short_description = models.TextField(max_length=500)

    def __str__(self):
        return self.site_title

class PartnerProgram(models.Model):
    site = models.ForeignKey(WebsiteDetail, on_delete=CASCADE, default=None, related_name="partnerprogram_source")
    heading = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='PartnerLogo')
    short_description = models.TextField(max_length=250, null=True)
    partner_link = models.URLField(null=True, blank=True)

class Address(models.Model):
    site = models.ForeignKey(WebsiteDetail, on_delete=CASCADE, default=None, related_name="address_source")
    branch_name = models.CharField(max_length=500, null=True)
    street = models.CharField(max_length=500, blank = True)
    city = models.CharField(max_length=500)
    division = models.CharField(max_length=500, blank = True)
    country = models.CharField(max_length=500)
    zip_code = models.CharField(max_length=500, blank = True)
    GMap_link = models.URLField(null=True)

    def __str__(self):
        return self.city+"-"+self.country

choice_list = (
    ('detailed','Detailed'),
    ('popable','Popable'),
)
class Explainations(models.Model):
    site = models.ForeignKey(WebsiteDetail, on_delete=CASCADE, default=None, related_name="explainations_source")
    type = models.CharField(max_length=100, choices = choice_list, null=True, blank= True)
    title = models.CharField(max_length=200)
    short_description = models.TextField(max_length=500)
    slug = models.SlugField(unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title+"-"+str(random.randint(101, 1022222222))+"-"+str(random.randint(88, 80000000)))
        return super().save(*args,**kwargs)


class FAQ(models.Model):
    site = models.ForeignKey(WebsiteDetail, on_delete=CASCADE, default=None, related_name="faqs_source", null=True, blank=True)
    FAQ_Branch = models.CharField(max_length=200)

    def __str__(self):
        return self.FAQ_Branch

class FaqSubSection(models.Model):
    faqs = models.ForeignKey(FAQ, on_delete=CASCADE, default=None, related_name="faq_sub_section")
    title = models.CharField(max_length=200)
    short_description = models.TextField(max_length=500)

    def __str__(self):
        return self.title