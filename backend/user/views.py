from django.contrib.auth import get_user_model
from django.http import JsonResponse, request
from django.shortcuts import render
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveUpdateAPIView
from rest_framework.response import Response

from friendships.models import Friendships
from user.serializers.default import UserSerializer

User = get_user_model()


class GetAllUsersView(ListAPIView):
    '''
    Get all the users

    .
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer

# no additional url needed, endpoint: backend/api/users/?search=dvdvd

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search = request.query_params.get('search')

        if search:
            queryset = queryset.filter(username__icontains=search)
            serializer = self.get_serializer(queryset, many=True)
        else:
            serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


class ToggleLikeUserView(GenericAPIView):
    '''
    Toggle follow/unfollow a user

    .
    '''
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
    '''
    List of all the logged in user’s followers

    .
    '''
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def filter_queryset(self, queryset):
        return self.request.user.followers

    # def get_queryset(self):
    #     followers = self.request.user.followers.all()
    #     return User.objects.filter(followers__in=followers)


class IAmFollowingView(ListAPIView):
    '''
     List of all the people the current logged in user is following

     .
    '''
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def filter_queryset(self, queryset):
        return self.request.user.following


class GetUpdateMyUserProfile(RetrieveUpdateAPIView):
    '''
    get: Get logged in user’s profile (as well as private information like email, etc.)

    .

    patch: Update the logged in user’s profile public info

    .

    put: Update the logged in user’s profile public info

    .
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class ShowFriendsView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def filter_queryset(self, queryset):
        return self.request.user.friends

    # def get_queryset(self):
    #     friends_list = []
    #     received = Friendships.objects.filter(request_for=self.request.user, status='A')
    #     for friend in received:
    #         friends_list.append(friend.request_from)
    #     sent = Friendships.objects.filter(request_from=self.request.user, status='A')
    #     for friend in sent:
    #         friends_list.append(friend.request_for)
    #     return friends_list




