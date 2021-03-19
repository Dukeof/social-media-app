from django.urls import path

from friendships.views import SendFriendRequestView

urlpatterns = [
    path('request/<int:pk>/', SendFriendRequestView.as_view()),
]