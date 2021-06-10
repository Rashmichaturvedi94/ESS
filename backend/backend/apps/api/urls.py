from backend.apps.accounts.views import AuthViewSet, UserViewSet
from backend.apps.sub.views import SubViewSet
from django.urls import path, include
from rest_framework import routers
from backend.apps.api.views import EssTokenObtainPairView
from backend.apps.course.views import CourseViewSet
from backend.apps.course.views import CourseContentsViewSet
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = routers.SimpleRouter()
router.register("auth", AuthViewSet, basename="auth")
router.register("users", UserViewSet, basename="users")
router.register("courses", CourseViewSet, basename="courses")
router.register("courseContents", CourseContentsViewSet, basename="courseContents")
router.register("subscriptions",SubViewSet,basename="subscriptions")

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
    path(
        "token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),
]
