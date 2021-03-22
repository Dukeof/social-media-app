from django.urls import path

from post.views import GetCreatePostsView, GetEditDeletePostView, ToggleLikePostView, GetLikedPostsView, \
    GetUserPostsView, PostsOfPeopleIAmFollowingView

urlpatterns = [
    path('', GetCreatePostsView.as_view()),
    path('<int:pk>/', GetEditDeletePostView.as_view()),
    path('toggle-like/<int:pk>/', ToggleLikePostView.as_view()),
    path('likes/', GetLikedPostsView.as_view()),
    path('user/<int:pk>/', GetUserPostsView.as_view()),
    path('following/', PostsOfPeopleIAmFollowingView.as_view())
]
