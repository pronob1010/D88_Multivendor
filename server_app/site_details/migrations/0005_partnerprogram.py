# Generated by Django 3.2.7 on 2021-10-07 05:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('site_details', '0004_auto_20211007_1114'),
    ]

    operations = [
        migrations.CreateModel(
            name='PartnerProgram',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=200)),
                ('logo', models.ImageField(upload_to='PartnerLogo')),
                ('short_description', models.TextField(max_length=250, null=True)),
                ('partner_link', models.URLField(blank=True, null=True)),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='site_details.websitedetails')),
            ],
        ),
    ]
