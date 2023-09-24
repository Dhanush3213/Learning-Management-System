
from rest_framework import serializers
from .models import Teacher,CourseCategory,Course,Chapter

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id','full_name','detail','email','password','qualification','mobile_no','skills','teacher_courses','skill_list']
        depth=1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = ['id','title','description']
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id','category','teacher','title','description','featured_img','techs']
        

class CourseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id','category','teacher','title','description','featured_img','techs','course_chapters','related_videos','tech_list']
        depth=1

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ['id','course','title','description','video','remarks']
