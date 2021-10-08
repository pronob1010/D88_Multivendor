# Generated by Django 3.2.7 on 2021-10-08 16:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Seller',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shop_name', models.CharField(max_length=100)),
                ('date_of_join', models.DateTimeField(auto_now_add=True)),
                ('verified', models.BooleanField(default=False)),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('root_user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='root_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
