# Generated by Django 3.0.5 on 2021-06-08 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0004_course_imgsrc'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='img',
            field=models.ImageField(blank=True, default='', upload_to='courses/'),
        ),
    ]
