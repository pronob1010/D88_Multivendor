from django.contrib import admin

# Register your models here.
from . models import *

class PartnerProgramAdmin(admin.StackedInline):
    model = PartnerProgram

class AddressAdmin(admin.StackedInline):
    model = Address

class ExplainationsAdmin(admin.StackedInline):
    model = Explainations

class AllAdmins(admin.ModelAdmin):
    inlines = [PartnerProgramAdmin, AddressAdmin, ExplainationsAdmin]

admin.site.register(WebsiteDetails, AllAdmins)

class FAQsSubSectionAdmin(admin.StackedInline):
    model = FAQsSubSection

class FAQsAdmin(admin.ModelAdmin):
    inlines = [FAQsSubSection,]

admin.site.register(FAQs)
admin.site.register(FAQsSubSection)