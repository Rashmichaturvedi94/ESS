from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers
from backend.apps.api.views import UserViewSet, EssTokenObtainPairView
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)

router = routers.SimpleRouter()
router.register("users", UserViewSet)

urlpatterns = router.urls

urlpatterns += [
  # OpenAPI + SwaggerUI
    path("_schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "swagger/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
  # JWT
    path(
        "token/",
        EssTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
]
