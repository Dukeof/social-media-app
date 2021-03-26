from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    content = models.CharField(max_length=500)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    author = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True, related_name='posts')
    liked_by = models.ManyToManyField(to=User, blank=True, related_name='liked_posts')
    post_shared = models.ForeignKey(to='self',
                                    blank=True,
                                    null=True,
                                    related_name='shared_within_posts',
                                    on_delete=models.SET_NULL)

    def __str__(self):
        return f'{self.id} {self.author.username}'

    class Meta:
        ordering = ['-created']


class PostImages(models.Model):
    image = models.ImageField()
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name='images')
