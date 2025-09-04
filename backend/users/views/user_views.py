# users/views/user_views.py

from rest_framework import viewsets
from users.serializers.user_serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAdminUser

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]  # Solo admin puede ver/editar usuarios
