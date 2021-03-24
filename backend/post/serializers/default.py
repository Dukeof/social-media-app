from rest_framework import serializers

from comments.serializers.nested import CommentInPostSerializer
from post.models import Post
from post.serializers.nested import PostSharedSerializer
from user.serializers.nested import UserPostSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserPostSerializer(read_only=True)
    liked_by = UserPostSerializer(read_only=True, many=True)
    post_shared = PostSharedSerializer(read_only=True)
    comments = CommentInPostSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'
