from django.db import models
from django.contrib.auth.models import User

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre


class Noticia(models.Model):
    ESTADOS = (
        ("borrador", "Borrador"),
        ("publicado", "Publicado"),
        ("archivado", "Archivado"),
    )

    titulo = models.CharField(max_length=255, db_index=True)
    slug = models.SlugField(unique=True, max_length=255)  # para URL amigables
    resumen = models.CharField(max_length=500, blank=True, null=True)
    contenido = models.TextField()

    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, related_name="noticias")
    autor = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="noticias")

    imagen_principal = models.ImageField(upload_to="noticias/portadas/", blank=True, null=True)
    archivo_pdf = models.FileField(upload_to="noticias/pdfs/", blank=True, null=True)  # opcional

    estado = models.CharField(max_length=20, choices=ESTADOS, default="borrador")
    destacada = models.BooleanField(default=False)

    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    fecha_publicacion = models.DateTimeField(blank=True, null=True)

    visitas = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["-fecha_publicacion", "-fecha_creacion"]
        indexes = [
            models.Index(fields=["titulo"]),
            models.Index(fields=["fecha_publicacion"]),
        ]

    def __str__(self):
        return self.titulo
