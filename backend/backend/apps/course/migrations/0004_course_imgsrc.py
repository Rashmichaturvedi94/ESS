# Generated by Django 3.0.5 on 2021-06-08 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_auto_20210607_1642'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='imgSrc',
            field=models.CharField(max_length=180, null=True),
        ),
    ]
