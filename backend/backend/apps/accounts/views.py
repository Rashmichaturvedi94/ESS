from backend.apps.accounts.serializers import UserSerializer
from backend.apps.accounts.models import User
from backend.apps.api.api.serializers import SerializerByMethodViewSetMixin, EmptySerializer
from backend.apps.accounts.serializers import RegisterSerializer

from django.contrib.auth import get_user_model
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action


from drf_spectacular.utils import (
    extend_schema,
)

class AuthViewSet(
    SerializerByMethodViewSetMixin,
    viewsets.GenericViewSet,
):
    """
    A viewset that provides the Auth standard actions
    """

    permission_classes = [
        AllowAny,
    ]
    serializer_class = EmptySerializer
    serializer_classes = {
        "register": RegisterSerializer,
    }
    queryset = get_user_model().objects.none()

    @extend_schema(
        summary="Adds a new user",
        description="Take a set of values and creates user account and returns user account details",
        responses={201: RegisterSerializer},
    )
    @action(detail=False, methods=["POST"])
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            self.get_serializer(user).data, status=status.HTTP_201_CREATED
        )

class UserViewSet(
    SerializerByMethodViewSetMixin,
    viewsets.ModelViewSet,
):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    serializer_classes = {
        "me": UserSerializer,
    }
    http_method_names = ["get", "head", "put", "patch", "options"]

    @action(detail=False, methods=["GET"])
    def me(self, request):
        return Response(self.get_serializer(request.user).data)
