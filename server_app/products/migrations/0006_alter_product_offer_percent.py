# Generated by Django 3.2.7 on 2021-10-01 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_customerreview_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='offer_percent',
            field=models.IntegerField(blank=True),
        ),
    ]