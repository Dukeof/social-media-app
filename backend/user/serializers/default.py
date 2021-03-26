from django.contrib.auth import get_user_model
from rest_framework import serializers

from user.serializers.nested import UserPostSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    friends = UserPostSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'first_name',
                  'last_name',
                  'email',
                  'followers',
                  'following',
                  'posts',
                  'liked_posts',
                  'avatar',
                  'about_me',
                  'friends']

