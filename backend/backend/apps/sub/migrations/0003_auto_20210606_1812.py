# Generated by Django 3.0.5 on 2021-06-06 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sub', '0002_submodel_course'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submodel',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
