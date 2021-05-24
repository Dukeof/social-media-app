from django.contrib.auth import get_user_model
from django.db.models import Q
from django.http import JsonResponse
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from friendships.models import Friendships
from friendships.serializers.default import FriendshipSerializer

User = get_user_model()


class SendFriendRequestView(GenericAPIView):
    '''
    post: Send friend request to another user

    .
    '''
    queryset = User.objects.all()
    serializer_class = FriendshipSerializer

    def post(self, request, *args, **kwargs):
        sender = request.user
        receiver = self.get_object()
        if sender == receiver:
            return JsonResponse({'detail': 'You can not send requests to yourself'})
        # Guillaume
        # row_one = Friendships.objects.filter(Q(request_from=sender), Q(request_for=receiver))
        # row_two = Friendships.objects.filter(Q(request_for=sender), Q(request_from=receiver))
        row_one = Friendships.objects.filter(Q(request_from=sender) & Q(request_for=receiver) |
                                             Q(request_for=sender) & Q(request_from=receiver))
        if row_one:
            return JsonResponse({'detail': 'Oops! Can not do that'})
        friendship = Friendships(request_from=sender, request_for=receiver)
        friendship.save()
        return Response(self.get_serializer(friendship).data)


class AcceptOrRejectRequestView(RetrieveUpdateDestroyAPIView):
    '''
    delete: Delete a friend request

    .

    patch: Accept or Reject an open friend request

    .

    get: Get details of a friend request

    .

    put: Accept or Reject an open friend request??

    .
    '''
    serializer_class = FriendshipSerializer
    queryset = Friendships.objects.all()
