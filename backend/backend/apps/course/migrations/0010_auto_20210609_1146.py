# Generated by Django 3.0.5 on 2021-06-09 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0009_coursecontents_img'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coursecontents',
            name='file',
        ),
        migrations.AlterField(
            model_name='coursecontents',
            name='img',
            field=models.ImageField(blank=True, default='', null=True, upload_to='courses/'),
        ),
        migrations.AlterField(
            model_name='coursecontents',
            name='position',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='coursecontents',
            name='url',
            field=models.URLField(null=True),
        ),
    ]