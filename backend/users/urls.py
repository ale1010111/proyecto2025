from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views.user_views import UserViewSet
from users.views.auth_views import RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users.views.auth_views import MeView, LoginView


router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')


urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'),
    path('me/', MeView.as_view(), name='me'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
