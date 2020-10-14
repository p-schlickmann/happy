from rest_framework import viewsets
from rest_framework import authentication
from django.db.utils import IntegrityError

from api import permissions
from api import serializers
from api.exceptions import BadRequest
from core.models import Orphanage


class ManageOrphanage(viewsets.ModelViewSet):
    queryset = Orphanage.objects.all()
    serializer_class = serializers.OrphSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnOrphanage, )

    def perform_create(self, serializer):
        try:
            serializer.save(user=self.request.user)
        except IntegrityError:
            raise BadRequest



