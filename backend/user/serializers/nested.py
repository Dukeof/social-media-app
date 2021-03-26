from django.contrib.auth import get_user_model
from rest_framework import serializers

from post.models import Post

User = get_user_model()


class UserPostSerializer(serializers.ModelSerializer):
    # full_name = serializers.SerializerMethodField()

    # def get_full_name(self, instance):
    #     return f'{instance.first_name} {instance.last_name}'

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


<<<<<<< HEAD
class UserCommentSerializer(serializers.ModelSerializer):
    # full_name = serializers.SerializerMethodField()

    # def get_full_name(self, instance):
    #     return f'{instance.first_name} {instance.last_name}'

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']






=======
class UserValidationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']
>>>>>>> dev
