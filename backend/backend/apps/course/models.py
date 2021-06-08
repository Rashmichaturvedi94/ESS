from django.contrib.auth.models import User
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length = 180)
    imgSrc = models.CharField(max_length = 180, null=True)
    img = models.ImageField(blank=True, default="", upload_to="courses/")
    description = models.TextField()
    price = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add = True, auto_now = False, blank = True)
    updated = models.DateTimeField(auto_now = True, blank = True)
    created_by = models.ForeignKey(User, on_delete = models.PROTECT, blank = True, null = True)

    def __str__(self):
        return self.task
