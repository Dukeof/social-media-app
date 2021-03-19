from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Friendships(models.Model):
    created = models.DateTimeField(auto_now=True)
    CHOICES = (('P', 'Pending'), ('A', 'Accept'), ('R', 'Reject'))
    status = models.CharField(max_length=1, choices=CHOICES, default='P')
    request_from = models.ForeignKey(to=User,
                                     related_name='sent_requests',
                                     blank=True,
                                     on_delete=models.CASCADE)
    request_for = models.ForeignKey(to=User,
                                    related_name='received_requests',
                                    blank=True,
                                    on_delete=models.CASCADE)

    class Meta:
        ordering = ['-created']
