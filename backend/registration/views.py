from django.core.exceptions import ObjectDoesNotExist
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.response import Response
from registration.models import Registration
from registration.serializers import RegisterUserSerializer
from user.serializers.nested import UserValidationSerializer


class CreateRegistrationView(CreateAPIView):
    permission_classes = []
    serializer_class = RegisterUserSerializer


class SignUpView(GenericAPIView):
    serializer_class = UserValidationSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']

        try:
            registration = Registration.objects.get(user__email=email, code=code, user__is_active=False)

            for key, value in request.data.items():
                if key == 'password':
                    registration.user.set_password(value)
                else:
                    setattr(registration.user, key, value)

            registration.user.is_active = True
            registration.user.save()
            return Response(self.get_serializer(registration.user).data)

        except ObjectDoesNotExist:
            return Response(data='Bad validation!', status=400)
