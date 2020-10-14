from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api import views

router = DefaultRouter()
router.register('orphanages', views.ManageOrphanage)

urlpatterns = [
    path('', include(router.urls)),
]
