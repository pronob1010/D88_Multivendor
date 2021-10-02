# Generated by Django 3.2.7 on 2021-10-01 20:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0005_alter_customerreview_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='FeaturedProducts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, choices=[('slider', 'Slider'), ('menu', 'Menu'), ('specialdiscount', 'Special Discount')], max_length=100, null=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]
