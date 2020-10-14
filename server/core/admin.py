from django.contrib import admin

from core import models

admin.site.register(models.Image)
admin.site.register(models.Orphanage)
admin.site.register(models.State)
admin.site.register(models.City)
