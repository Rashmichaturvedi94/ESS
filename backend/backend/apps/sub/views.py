from backend.apps.sub.models import SubModel
from backend.apps.sub.serializers import SubSerializer
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser

# Create your views here.

class SubViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sub to be viewed or edited.
    """
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]
    queryset = SubModel.objects.all()
    serializer_class = SubSerializer

