from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from django.db import models
from backend.apps.course.models import Course

class CourseSerializer(ModelSerializer):
  class Meta:
    model = Course
    fields = [
      "id",
      "title",
      "description",
      "price",
      "duration",
      "created_by",
      "timestamp",
      "updated",
      "img"
    ]
