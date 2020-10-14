from django.db import models
from django.conf import settings


class State(models.Model):
    name = models.CharField(max_length=64)
    short = models.CharField(max_length=3)

    def __str__(self):
        return str(self.short)


class City(models.Model):
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='cities')
    name = models.CharField(max_length=64)
    short = models.CharField(max_length=4)

    def __str__(self):
        return f'{self.state} | {self.name}'


class Orphanage(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='orphs')
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='orphs')
    name = models.CharField(max_length=64)
    about = models.CharField(max_length=255)
    instructions = models.CharField(max_length=132)
    open = models.TimeField()
    close = models.TimeField()
    lat = models.FloatField()
    lon = models.FloatField()
    open_on_weekends = models.BooleanField()

    def __str__(self):
        return f'{self.city} | {self.name}'


class Image(models.Model):
    orphanage = models.ForeignKey(Orphanage, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.name} | {self.orphanage}'
