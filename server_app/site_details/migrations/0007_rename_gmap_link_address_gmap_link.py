# Generated by Django 3.2.7 on 2021-10-07 05:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('site_details', '0006_auto_20211007_1130'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='gmap_link',
            new_name='GMap_link',
        ),
    ]
