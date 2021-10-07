# Generated by Django 3.2.7 on 2021-10-07 05:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('site_details', '0003_auto_20211007_1101'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='city',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='address',
            name='country',
            field=models.CharField(max_length=500),
        ),
        migrations.CreateModel(
            name='Explainations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, choices=[('detailed', 'Detailed'), ('popable', 'Popable')], max_length=100, null=True)),
                ('title', models.CharField(max_length=200)),
                ('short_description', models.TextField(max_length=500)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='site_details.websitedetails')),
            ],
        ),
    ]
