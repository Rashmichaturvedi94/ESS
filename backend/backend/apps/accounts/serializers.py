from backend.apps.accounts.models import User
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.db import models

from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from drf_spectacular.utils import extend_schema_field

class UserSerializer(serializers.ModelSerializer):
    is_publisher = serializers.BooleanField(read_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "is_active",
            "is_publisher",
            "username",
            "name",
            "email",
            "date_joined",
        ]
        read_only_fields = ["id", "is_active", "date_joined", "username"]

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=get_user_model().objects.all())],
        required=False,
    )
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = get_user_model()
        fields = (
            "username",
            "password",
            "password2",
            "email",
            "name",
            "is_publisher",
        )
    
    def create(self, validated_data):
        _ = validated_data.pop("password2")
        user = get_user_model().create_user(
            **validated_data,
        )
        return user
