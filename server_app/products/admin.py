from django.contrib import admin

# Register your models here.
from.models import *
admin.site.register(ProductsCategory),
admin.site.register(ProductsSubCategory),

class Default_Product_Specifications_Admin(admin.TabularInline):
    model = Default_Product_Specifications

class Extra_Specifications_Admin(admin.TabularInline):
    model = Extra_Specifications

class Customer_Review_Admin(admin.StackedInline):
    model = CustomerReview

class ProcuctAdmin(admin.ModelAdmin):
    inlines  = [Default_Product_Specifications_Admin,Extra_Specifications_Admin, Customer_Review_Admin]

admin.site.register(product, ProcuctAdmin)