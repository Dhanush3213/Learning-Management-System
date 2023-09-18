from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerializer
from . import models
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse,JsonResponse
from django.shortcuts import get_object_or_404
# Create your views here.
class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def teacher_register(request):
    if request.method == 'POST':
        serializer = TeacherSerializer(data=request.POST)
  

        if serializer.is_valid():
            serializer.save()
            print(serializer.errors)
            return JsonResponse({'bool': True})
        else:
            print(serializer.errors)
            return JsonResponse({'bool': False})

    # Handle other HTTP methods here, if needed
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def TeacherLogin(request):
    email = request.POST['email']
    password = request.POST['password']
    
    # You should handle exceptions when trying to get the Teacher object
    try:
        teacherData = models.Teacher.objects.get(email=email, password=password)
    except models.Teacher.DoesNotExist:
        teacherData = None

    if teacherData:
       return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})

