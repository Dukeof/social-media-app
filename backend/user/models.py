from django.contrib.auth.models import AbstractUser
from django.db import models

from friendships.models import Friendships
from project import settings


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    following = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='followers', blank=True)
    about_me = models.CharField(max_length=500, blank=True)
    avatar = models.ImageField(blank=True, null=True, upload_to=user_directory_path)

    @property
    def friends(self):
        #Guillaume
        """Returns the list of friends"""
        friends_list = []
        received = Friendships.objects.filter(request_for=self, status='A')
        for friend in received:
            friends_list.append(friend.request_from)
        sent = Friendships.objects.filter(request_from=self, status='A')
        for friend in sent:
            friends_list.append(friend.request_for)
        return friends_list

    def __str__(self):
        return f'{self.id}: {self.email}'
