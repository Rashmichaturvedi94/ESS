from backend.apps.sub.models import SubModel
from backend.apps.sub.serializers import SubSerializer, ReadSubSerializer
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

    def get_queryset(self):
        return SubModel.objects.filter(subscriber=self.request.user)

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ReadSubSerializer
        else:
            return SubSerializer

