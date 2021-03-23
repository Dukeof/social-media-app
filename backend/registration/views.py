from django.contrib.auth import get_user_model

from rest_framework.generics import CreateAPIView, GenericAPIView
from registration.serializers import ValidateUserSerializer, RegisterUserSerializer

User = get_user_model()


class CreateRegistrationView(CreateAPIView):
    permission_classes = []
    serializer_class = RegisterUserSerializer


class SignUpView(GenericAPIView):
    serializer_class = ValidateUserSerializer
