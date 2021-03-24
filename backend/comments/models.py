from django.contrib.auth import get_user_model
from django.db import models

from post.models import Post

User = get_user_model()


class Comments(models.Model):
    content = models.CharField(max_length=300)
    comment_for = models.ForeignKey(to=Post, related_name='comments', on_delete=models.SET_NULL, null=True, blank=True)
    written_by = models.ForeignKey(to=User, related_name='comments', on_delete=models.SET_NULL, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
