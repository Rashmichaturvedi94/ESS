from backend.apps.api.api.serializers import EssTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class EssTokenObtainPairView(TokenObtainPairView):
    serializer_class = EssTokenObtainPairSerializer
