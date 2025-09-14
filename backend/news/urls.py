# backend/news/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.ViewNews import PublicNewsListView, AdminNewsViewSet, PublicNewsDetailView

# Router para las rutas de administración (CRUD)
router = DefaultRouter()
router.register(r'admin', AdminNewsViewSet, basename='admin-noticias')

urlpatterns = [
    # 🟢 Listado público de noticias publicadas
    # URL final: http://127.0.0.1:8000/api/noticias/
    path('', PublicNewsListView.as_view(), name='public_noticias'),

    path('<slug:slug>/', PublicNewsDetailView.as_view(), name='public-news-detail'),  # detalle

    # 🔒 Endpoints CRUD para administración (requiere autenticación JWT)
    # URL final: http://127.0.0.1:8000/api/noticias/admin/
    path('', include(router.urls)),


]
# Nota: Las rutas de administración están protegidas y requieren un token JWT válido.