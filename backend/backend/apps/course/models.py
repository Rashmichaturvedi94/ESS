from django.contrib.auth.models import User
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length = 180)
    imgSrc = models.CharField(max_length = 180, null=True)
    img = models.ImageField(blank=True, default="", upload_to="courses/")
    description = models.TextField()
    price = models.FloatField()
    duration  = models.IntegerField(null=True)
    timestamp = models.DateTimeField(auto_now_add = True, auto_now = False, blank = True)
    updated = models.DateTimeField(auto_now = True, blank = True)
    created_by = models.ForeignKey(to="accounts.User", on_delete = models.PROTECT, blank = True, null = True)

    def __str__(self):
        return self.task

class CourseContents(models.Model):
    title = models.CharField(max_length = 180)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete = models.PROTECT, blank = True, null = True, related_name="contents")
    position = models.IntegerField(null=True)
    url = models.URLField(null=True)
    timestamp = models.DateTimeField(auto_now_add = True, auto_now = False, blank = True)
    updated = models.DateTimeField(auto_now = True, blank = True)
    created_by = models.ForeignKey(to="accounts.User", on_delete = models.PROTECT, blank = True, null = True)
    img = models.ImageField(blank=True, default="", upload_to="courses/", null=True)

    def __str__(self):
        return self.task
