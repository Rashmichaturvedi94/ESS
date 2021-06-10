from django.db import models, transaction
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """
    Customized User model based on Django's original User.
    """
    name = models.CharField(max_length=128, default="")
    is_publisher = models.BooleanField(default=False)

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"
    
    @classmethod
    @transaction.atomic
    def create_user(
        cls,
        email,
        username,
        name,
        password,
        is_staff=False,
        is_publisher=False,
    ):
        user, _ = cls.objects.get_or_create(
            email=email,
            username=username,
            name=name,
            is_publisher=is_publisher,
            is_staff=is_staff,
        )
        user.set_password(password)
        user.save()
        return user

