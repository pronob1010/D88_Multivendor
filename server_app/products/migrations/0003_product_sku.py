# Generated by Django 3.2.7 on 2021-09-27 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_remove_product_sku'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='SKU',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True),
        ),
    ]
