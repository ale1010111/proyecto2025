from rest_framework import viewsets, permissions, filters, generics
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Noticia
from ..serializers import NoticiaSerializer

# 🔹 Vista pública (GET)
class PublicNewsListView(generics.ListAPIView):
    queryset = Noticia.objects.filter(estado='publicado')
    serializer_class = NoticiaSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['categoria', 'destacada']
    search_fields = ['titulo', 'resumen', 'contenido']
    ordering_fields = ['fecha_publicacion', 'visitas']
    ordering = ['-fecha_publicacion']

# 🔹 Vista administrativa (CRUD)
class AdminNewsViewSet(viewsets.ModelViewSet):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(autor=self.request.user)

    # 🔹 Filtros y búsqueda
    filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['categoria', 'estado', 'destacada']
    search_fields = ['titulo', 'resumen', 'contenido']
    ordering_fields = ['fecha_publicacion', 'visitas']
    ordering = ['-fecha_publicacion']

    def perform_create(self, serializer):
        """
        Al crear una noticia, asigna automáticamente el usuario autenticado como autor.
        """
        serializer.save(autor=self.request.user)
        
class PublicNewsDetailView(generics.RetrieveAPIView):
    queryset = Noticia.objects.filter(estado='publicado')
    serializer_class = NoticiaSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'  # busca por slug en vez de pk