from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.response import Response

from registration.serializers import ValidateUserSerializer, RegisterUserSerializer


class CreateRegistrationView(CreateAPIView):
    permission_classes = []
    serializer_class = RegisterUserSerializer


class SignUpView(GenericAPIView):
    permission_classes = []
    serializer_class = ValidateUserSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)

        return Response(serializer.data)
