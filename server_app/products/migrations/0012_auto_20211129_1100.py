# Generated by Django 3.2.7 on 2021-11-29 05:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20211009_0009'),
    ]

    operations = [
        migrations.AddField(
            model_name='productcategory',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='products/category/image'),
        ),
        migrations.AddField(
            model_name='productsubcategory',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='products/category/subCategory/image'),
        ),
    ]