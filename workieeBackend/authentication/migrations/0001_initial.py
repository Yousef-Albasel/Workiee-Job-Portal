# Generated by Django 5.0.4 on 2024-05-10 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserRegistration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=20)),
                ('isAdmin', models.BooleanField()),
                ('companyname', models.CharField(max_length=20)),
            ],
        ),
    ]