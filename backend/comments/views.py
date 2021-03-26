from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from comments.models import Comments
from comments.serializers.default import CommentSerializer
from post.models import Post


class PostCommentView(ListCreateAPIView):
    '''
    get: List all comments of a post

    .

    post: Create a new comment on a post.

    .
    '''
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # serializer.save(written_by=self.request.user, comment_for_id=self.kwargs['pk'])
        post = Post.objects.get(id=self.kwargs['pk'])
        serializer.save(written_by=self.request.user, comment_for=post)

    def get_queryset(self):
        return Comments.objects.filter(comment_for__id=self.kwargs['pk'])





