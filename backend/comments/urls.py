from django.urls import path

from comments.views import PostCommentView


urlpatterns = [
    path('<int:pk>/', PostCommentView.as_view()),
]