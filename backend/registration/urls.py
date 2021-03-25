from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from registration.views import CreateRegistrationView, SignUpView

urlpatterns = [
    path('registration/', CreateRegistrationView.as_view(), name='Register a new user'),  # POST
    path('registration/validation/', SignUpView.as_view(), name='Validate a new user'),  # POST
]
