# Generated by Django 3.2.3 on 2021-06-09 11:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sub', '0003_submodel_is_subscribed'),
    ]

    operations = [
        migrations.RenameField(
            model_name='submodel',
            old_name='is_subscribed',
            new_name='active',
        ),
    ]
