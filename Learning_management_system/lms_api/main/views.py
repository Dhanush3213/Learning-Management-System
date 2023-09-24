from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerializer,CategorySerializer,CourseSerializer,ChapterSerializer,CourseDetailSerializer
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
   
    try:
        teacherData = models.Teacher.objects.get(email=email, password=password)
    except models.Teacher.DoesNotExist:
        teacherData = None

    if teacherData:
       return JsonResponse({'bool': True,'teacher_id':teacherData.id})
    else:
        return JsonResponse({'bool': False})

class CategoryList(generics.ListCreateAPIView):
    queryset=models.CourseCategory.objects.all()
    serializer_class=CategorySerializer

class CourseList(generics.ListCreateAPIView):
    queryset=models.Course.objects.all()
    serializer_class=CourseSerializer
    def get_queryset(self):
        qs=super().get_queryset()
        if 'result'in self.request.GET:
            limit=int(self.request.GET['result'])
            qs=models.Course.objects.all().order_by('-id')[:limit]

        if 'category' in self.request.GET:
            category = self.request.GET['category']
            qs=models.Course.objects.filter(techs__icontains=category)
  
        if 'skill_name' in self.request.GET and 'teacher' in self.request.GET:
              skill_name = self.request.GET['skill_name']
              teacher = self.request.GET['teacher']
              teacher = models.Teacher.objects.filter(id=teacher).first()

              qs=models.Course.objects.filter(techs__icontains=skill_name,teacher=teacher)
        return qs
    
    
class CourseDetailView(generics.RetrieveAPIView):
    queryset=models.Course.objects.all()
    serializer_class=CourseDetailSerializer
    # def get_queryset(self):
    #     qs=super().get_queryset()
    #     if 'category' in self.request.GET:
    #         category = self.request.GET['category']
    #         qs=models.Course.objects.filter(techs__icontains=category)

    #     if 'skill_name' in self.request.GET and 'teacher' in self.request.GET:
    #         skill_name = self.request.GET['skill_name']
    #         skill_name = self.request.GET['teacher']
    #         teacher = models.Teacher.objects.filter(id=skill_name).first()

    #         qs=models.Course.objects.filter(techs__icontains=skill_name,teacher=teacher)
    #     return qs
   
class TeacherCourseList(generics.ListCreateAPIView):
    serializer_class=CategorySerializer
    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)

class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Course.objects.all()
    serializer_class=CourseSerializer

class ChapterList(generics.ListCreateAPIView):
    queryset=models.Chapter.objects.all()
    serializer_class=ChapterSerializer

class CourseChapterList(generics.ListAPIView):
    serializer_class=ChapterSerializer
    def get_queryset(self):
            course_id=self.kwargs['course_id']
            course=models.Course.objects.get(pk=course_id)
            return models.Chapter.objects.filter(course=course)

class ChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Chapter.objects.all()
    serializer_class=ChapterSerializer
