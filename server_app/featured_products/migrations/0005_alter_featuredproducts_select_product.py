# Generated by Django 3.2.7 on 2021-10-02 20:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_alter_product_offer_percent'),
        ('featured_products', '0004_rename_product_featuredproducts_select_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='featuredproducts',
            name='Select_Product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='featured_products', to='products.product'),
        ),
    ]
