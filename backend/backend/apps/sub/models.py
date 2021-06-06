from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class SubModel(models.Model):
    price = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add = True, auto_now = False, blank = True)
    updated = models.DateTimeField(auto_now = True, blank = True)
    subscriber = models.ForeignKey(User, on_delete = models.PROTECT, blank = True, null = True)

    def __str__(self):
        return self.task
