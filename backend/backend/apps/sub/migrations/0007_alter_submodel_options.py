# Generated by Django 3.2.3 on 2021-06-10 16:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sub', '0006_alter_submodel_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='submodel',
            options={'managed': False},
        ),
    ]