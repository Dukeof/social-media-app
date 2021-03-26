from rest_framework import serializers

from post.models import Post, PostImages
from user.serializers.nested import UserPostSerializer


class PostSharedSerializer(serializers.ModelSerializer):
    author = UserPostSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImages
        fields = ['image']
