from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from backend.apps.course.models import Course
from backend.apps.course.serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows courses to be viewed or edited.
    """
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

