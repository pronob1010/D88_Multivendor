# Generated by Django 3.2.7 on 2021-10-07 05:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('site_details', '0005_partnerprogram'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='branch_name',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='gmap_link',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='site',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='site_details.websitedetails'),
        ),
        migrations.AlterField(
            model_name='explainations',
            name='site',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='site_details.websitedetails'),
        ),
        migrations.AlterField(
            model_name='partnerprogram',
            name='site',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='site_details.websitedetails'),
        ),
    ]
