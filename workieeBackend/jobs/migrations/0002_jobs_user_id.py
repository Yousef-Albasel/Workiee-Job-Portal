# Generated by Django 5.0.4 on 2024-05-24 15:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_alter_user_company_name'),
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobs',
            name='user_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='authentication.user'),
        ),
    ]
