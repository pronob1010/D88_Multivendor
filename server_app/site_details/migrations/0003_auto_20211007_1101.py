# Generated by Django 3.2.7 on 2021-10-07 05:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_details', '0002_rename_website_details_websitedetails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='websitedetails',
            name='fev_icon',
            field=models.ImageField(null=True, upload_to='logo'),
        ),
        migrations.AlterField(
            model_name='websitedetails',
            name='secondary_logo',
            field=models.ImageField(null=True, upload_to='logo'),
        ),
        migrations.AlterField(
            model_name='websitedetails',
            name='short_description',
            field=models.TextField(max_length=500),
        ),
    ]
