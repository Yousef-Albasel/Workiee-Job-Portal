# Generated by Django 5.0.4 on 2024-06-23 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0012_remove_jobapplication_job_remove_jobapplication_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobapplication',
            name='job_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='jobapplication',
            name='user_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
