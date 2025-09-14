from django.contrib import admin
from .models import Categoria, Noticia

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "descripcion")
    search_fields = ("nombre",)

@admin.register(Noticia)
class NoticiaAdmin(admin.ModelAdmin):
    list_display = ("titulo", "categoria", "autor", "estado", "fecha_publicacion")
    list_filter = ("estado", "categoria", "destacada")
    search_fields = ("titulo", "resumen", "contenido")
    prepopulated_fields = {"slug": ("titulo",)}  # para que el slug se llene solo
