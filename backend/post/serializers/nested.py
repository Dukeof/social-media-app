from rest_framework import serializers

from post.models import Post
from user.serializers.nested import UserPostSerializer


class PostSharedSerializer(serializers.ModelSerializer):
    author = UserPostSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


