from django.contrib.auth import get_user_model
<<<<<<< HEAD
from django.shortcuts import render
from rest_framework import status
=======
>>>>>>> dev

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from post.models import Post, PostImages
from post.permissions import IsOwnerOrAdmin
from post.serializers.default import PostSerializer


User = get_user_model()


class GetCreatePostsView(ListCreateAPIView):
    '''
    get: List all the posts of all users in chronological order

    .

    post: User can create a new post by sending post data. S/He should also be able to share another post

    .
    '''

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def create(self, request, *args, **kwargs):
        if request.data.get('post_shared'):
            post = self.queryset.get(id=request.data['post_shared'])
            serializer = self.get_serializer(data={'content': request.data['content']}, partial=True)
            serializer.is_valid(raise_exception=True)
            new_post = serializer.save(author=request.user, post_shared=post)
            for image in request.FILES.getlist('images'):
                new_image = PostImages(image=image, post=new_post)
                new_image.save()
        else:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            new_post = serializer.save(author=request.user)
            for image in request.FILES.getlist('images'):
                new_image = PostImages(image=image, post=new_post)
                new_image.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

# below works just fine, no additional url needed. endpoint: backend/api/social/posts/?search=poplpo
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search = request.query_params.get('search')

        if search:
            queryset = queryset.filter(content__icontains=search).order_by('created')
            #serializer = self.get_serializer(queryset, many=True)
            serializer = PostSerializer(queryset, many=True)
        else:
            serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)


class GetEditDeletePostView(RetrieveUpdateDestroyAPIView):
    '''
    delete: Delete a post by ID (only allowed for owner of post or admin)

    .

    patch: Update a specific post (only allowed owner of post or admin)

    .

    get: Get a specific post by ID and display all the information about that post

    .

    put: Update a specific post (only allowed owner of post or admin)

    .
    '''
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrAdmin]


class ToggleLikePostView(GenericAPIView):
    '''
    Toggle like a post

    .
    '''
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        user = request.user
        if user in instance.liked_by.all():
            instance.liked_by.remove(user)
        else:
            instance.liked_by.add(user)
        return Response(self.get_serializer(instance).data)


class GetLikedPostsView(ListAPIView):
    '''
    The list of the posts the user likes

    .
    '''
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Post.objects.filter(liked_by=self.request.user)


class GetUserPostsView(ListAPIView):
    '''
    List all the posts of a specific user in chronological order

    .
    '''
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Post.objects.filter(author=self.kwargs.get('pk'))
        # return User.objects.get(id=self.kwargs.get('pk')).posts  This works too!


class PostsOfPeopleIAmFollowingView(ListAPIView):
    '''
    List all the posts of followed users in chronological order

    .
    '''
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    # queryset = Post.objects.all()

    # def filter_queryset(self, queryset):
    #     return self.queryset.filter(author__in=self.request.user.following.all())

    def get_queryset(self):
        return Post.objects.all().filter(author__in=self.request.user.following.all())

# this is an additional url
# class Search(ListAPIView):
#     def get(self, request, *args, **kwargs):
#         subject = kwargs.get('subject')
#         keyword = request.query_params.get('keyword')
#
#         if subject == 'post':
#             queryset = Post.objects.filter(content__icontains=keyword)
#             serializer = PostSerializer(queryset, many=True)
#         elif subject == 'user':
#             queryset = User.objects.filter(username__icontains=keyword)
#             serializer = UserSerializer(queryset, many=True)
#         return Response(serializer.data)
