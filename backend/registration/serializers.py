from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.core.mail import send_mail
from rest_framework.response import Response

from registration.models import Registration

User = get_user_model()


class RegisterUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(allow_blank=False, write_only=True)

    def create(self, validated_data):
        email = validated_data['email']
        new_user = User(email=email, username=email, is_active=False)
        new_user.save()
        registration = Registration(user=new_user)
        registration.save()

        send_mail(
            'Motion Validation code',
            f'Hello, Please use the validation code: {registration.code} to continue your'
            ' registration at http://juskoded.propulsion-learn.ch .',
            'juskoded@gmail.com',
            [new_user.email],
            fail_silently=False,
        )
        return Response(status=201)

    class Meta:
        model = Registration
        fields = "__all__"

class UserValidationSerializer(serializers.ModelSerializer):

        class Meta:
            model = Registration
            fields = "__all__"
