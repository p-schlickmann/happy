from django.db import models
from django.conf import settings
from django.core.validators import MinLengthValidator


class State(models.Model):
    name = models.CharField(max_length=64, validators=[MinLengthValidator(2)])
    short = models.CharField(max_length=3, validators=[MinLengthValidator(2)])

    def __str__(self):
        return str(self.short)

    def is_valid_state(self):
        """
        Self.name can only contain letters and spaces
        Self.short can only contain letters
        """
        name = str(self.name)
        short = str(self.short)

        is_valid = all(char.isalpha() or char.isspace() for char in name)
        too_many_spaces = name.count(' ') == 2 and len(name) == 3

        return is_valid and not too_many_spaces and short.isalpha()


class City(models.Model):
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='cities')
    name = models.CharField(max_length=64, validators=[MinLengthValidator(2)])
    short = models.CharField(max_length=4, blank=True, validators=[MinLengthValidator(2)])

    def __str__(self):
        return f'{self.state} | {self.name}'

    def is_valid_city(self):
        """
        Self.name can only contain letters and spaces(Min 2 chars if length==3)
        Self.short can only contain letters (if exists)
        The length of the fields must be >= 2
        """
        name = str(self.name)

        is_valid = all(char.isalpha() or char.isspace() for char in name)
        too_many_spaces = name.count(' ') == 2 and len(name) == 3

        if self.short:  # not blank
            short = str(self.short)
            return is_valid and not too_many_spaces and short.isalpha()
        else:
            return is_valid and not too_many_spaces


class Orphanage(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='orphs')
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='orphs')
    name = models.CharField(max_length=64, validators=[MinLengthValidator(5)])
    about = models.CharField(max_length=255, validators=[MinLengthValidator(15)])
    instructions = models.CharField(max_length=128, validators=[MinLengthValidator(10)])
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
