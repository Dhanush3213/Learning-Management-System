from django.urls import path
from . import views


urlpatterns = [
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher-login/', views.TeacherLogin),
    path('teacher-register/', views.teacher_register, name='teacher_register'),
]