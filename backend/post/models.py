from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    content = models.CharField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    author = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True, related_name='posts')
    liked_by = models.ManyToManyField(to=User, blank=True, related_name='liked_posts')

    def __str__(self):
        return self.id, self.content, self.created, self.author, self.liked_by

    class Meta:
        ordering = ['-created']