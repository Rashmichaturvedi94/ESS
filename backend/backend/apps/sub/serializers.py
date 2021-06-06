from backend.apps.sub.models import SubModel
from rest_framework.serializers import ModelSerializer


class SubSerializer(ModelSerializer):
  class Meta:
    model = SubModel
    fields = [
      "id",
      "price",
      "timestamp",
      "updated",
      "subscriber",
      "course"
    ]
