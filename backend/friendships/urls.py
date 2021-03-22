from django.urls import path

from friendships.views import SendFriendRequestView, AcceptOrRejectRequestView

urlpatterns = [
    path('request/<int:pk>/', SendFriendRequestView.as_view()),
    path('requests/<int:pk>/', AcceptOrRejectRequestView.as_view()),
]