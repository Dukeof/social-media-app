from django.urls import path

from user.views import GetAllUsersView, ToggleLikeUserView, GetFollowersView, IAmFollowingView, GetUpdateMyUserProfile

urlpatterns = [
    path('users/', GetAllUsersView.as_view()),
    path('users/me/', GetUpdateMyUserProfile.as_view()),
    path('social/followers/toggle-follow/<int:pk>/', ToggleLikeUserView.as_view()),
    path('social/followers/followers/', GetFollowersView.as_view()),
    path('social/followers/following/', IAmFollowingView.as_view()),
]