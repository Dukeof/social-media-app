from django.http import JsonResponse, request
from django.shortcuts import render
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response

from user.models import User
from user.serializers.default import UserSerializer


class GetAllUsersView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ToggleLikeUserView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        user = request.user
        if user == instance:
            return JsonResponse({'details': 'You can not follow yourself!'})
        if instance in user.following.all():
            user.following.remove(instance)
        else:
            user.following.add(instance)
        user.save()
        return Response(self.get_serializer(user).data)


class GetFollowersView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def filter_queryset(self, queryset):
        return self.request.user.followers

    # def get_queryset(self):
    #     followers = self.request.user.followers.all()
    #     return User.objects.filter(followers__in=followers)


class IAmFollowingView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def filter_queryset(self, queryset):
        return self.request.user.following

