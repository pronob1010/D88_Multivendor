# Generated by Django 3.2.7 on 2021-10-07 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_details', '0008_alter_websitedetails_secondary_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='websitedetails',
            name='fev_icon',
            field=models.ImageField(blank=True, null=True, upload_to='logo'),
        ),
    ]