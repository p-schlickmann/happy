from rest_framework import serializers

from core import models


class StateSerializer(serializers.ModelSerializer):
    """Serializing States"""
    class Meta:
        model = models.State
        fields = ('id', 'name', 'short')


class CitySerializer(serializers.ModelSerializer):
    """Serializing States"""
    class Meta:
        model = models.City
        fields = ('id', 'name', 'state', 'short')


class OrphSerializer(serializers.ModelSerializer):
    """Serializing Orphanages"""
    class Meta:
        model = models.Orphanage
        fields = ('id', 'user', 'state', 'city', 'name', 'about', 'instructions',
                  'open', 'close', 'lat', 'lon', 'open_on_weekends')
        extra_kwargs = {'user': {'read_only': True}}  # Set user field read_only


class ImageSerializer(serializers.ModelSerializer):
    """Serializing Images"""
    class Meta:
        model = models.Image
        fields = ('id', 'orphanage', 'name', 'image')




