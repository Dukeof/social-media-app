from rest_framework import serializers

from friendships.models import Friendships
from user.serializers.default import UserSerializer


class FriendshipSerializer(serializers.ModelSerializer):
    request_from = UserSerializer(read_only=True)
    request_for = UserSerializer(read_only=True)

    class Meta:
        model = Friendships
        fields = '__all__'
