import random

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    code = models.CharField(max_length=6, default=code_generator)
    user = models.OneToOneField(to=User, related_name='registration', on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return f'{self.id}: {self.user.email}'
