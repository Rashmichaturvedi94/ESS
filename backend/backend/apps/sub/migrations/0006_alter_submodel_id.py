# Generated by Django 3.2 on 2021-06-10 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sub', '0005_merge_20210609_2310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submodel',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
