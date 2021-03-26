from rest_framework import serializers

from comments.models import Comments
from post.serializers.default import PostSerializer
from user.serializers.nested import UserCommentSerializer


class CommentSerializer(serializers.ModelSerializer):
    written_by = UserCommentSerializer(read_only=True)
    comment_for = PostSerializer(read_only=True)

    class Meta:
        model = Comments
        fields = '__all__'
