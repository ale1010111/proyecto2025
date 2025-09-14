from rest_framework import serializers
from .models import Categoria, Noticia
from django.contrib.auth.models import User

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'descripcion']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class NoticiaSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer(read_only=True)
    autor = UserSerializer(read_only=True)

    class Meta:
        model = Noticia
        fields = [
            'id',
            'titulo',
            'slug',
            'resumen',
            'contenido',
            'categoria',
            'autor',
            'imagen_principal',
            'archivo_pdf',
            'estado',
            'destacada',
            'fecha_creacion',
            'fecha_actualizacion',
            'fecha_publicacion',
            'visitas',
        ]
