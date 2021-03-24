from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.core.mail import send_mail
from rest_framework.exceptions import ValidationError

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
        return registration

    class Meta:
        model = Registration
        fields = ("id", "email", 'code')


class ValidateUserSerializer(serializers.Serializer):
    code = serializers.CharField(label='code', write_only=True)
    username = serializers.CharField(label='username', write_only=True)
    email = serializers.EmailField(label='email', write_only=True)
    first_name = serializers.CharField(label='first_name', write_only=True)
    last_name = serializers.CharField(label='last_name', write_only=True)
    password = serializers.CharField(label='password', write_only=True)
    password2 = serializers.CharField(label='password_repeat', write_only=True)

    def validate(self, data):
        code = data.get('code')
        email = data.get('email')
        user = User.objects.get(email=email, registration__code=code, is_active=False)

        if not user:
            raise ValidationError('Bad validation code!')

        password = data.get('password')
        password_repeat = data.get('password2')
        if password != password_repeat:
            raise ValidationError('Passwords fields must be the same!')

        return data

    def save(self, validated_data):

        pass

