from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.core.mail import send_mail


from registration.models import Registration

message = 'Hello, Please use the validation code to continue your registration at http://juskoded.propulsion-learn.ch .'

User = get_user_model()


class RegisterUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(allow_blank=False, write_only=True)

    def create(self, validated_data):
        new_user = User(email=validated_data['email'], is_active=False)
        new_user.save()
        registration = Registration(user=new_user)
        registration.save()

        send_mail(
            f'Motion, Validation code: {registration.code}',
            message,
            'juskoded@gmail.com',
            new_user.email,
            fail_silently=False,
        )
        return registration

    class Meta:
        model = Registration
        fields = ("id", "email", 'code')


class ValidateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password']
