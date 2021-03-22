from rest_framework import serializers

from post.models import Post
from user.serializers.nested import UserPostSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserPostSerializer(read_only=True)
    liked_by = UserPostSerializer(read_only=True, many=True)

    class Meta:
        model = Post
        fields = '__all__'
