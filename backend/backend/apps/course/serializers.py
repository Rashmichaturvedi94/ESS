from backend.apps.course.models import CourseContents
from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from django.db import models
from backend.apps.course.models import Course

class CourseContentsSerializer(ModelSerializer):
  class Meta:
    model = CourseContents
    fields = [
      "id",
      "title",
      "description",
      "price",
      "duration",
      "course",
      "position",
      "file",
      "url",
      "created_by",
      "timestamp",
      "updated",
      "img"
    ]

class CourseSerializer(ModelSerializer):
  contents = CourseContentsSerializer(many=True, required=False)
  class Meta:
    model = Course
    fields = [
      "id",
      "title",
      "description",
      "price",
      "created_by",
      "timestamp",
      "updated",
      "contents"
    ]

