from backend.apps.sub.models import SubModel
from rest_framework.serializers import ModelSerializer
from backend.apps.course.serializers import CourseSerializer


class SubSerializer(ModelSerializer):
  class Meta:
    model = SubModel
    fields = [
      "id",
      "price",
      "timestamp",
      "updated",
      "subscriber",
      "course",
    ]

class ReadSubSerializer(ModelSerializer):
  
  course=CourseSerializer(many=False, required=False)
  class Meta:
    model = SubModel
    fields = [
      "id",
      "price",
      "timestamp",
      "updated",
      "subscriber",
      "course",
    ]
