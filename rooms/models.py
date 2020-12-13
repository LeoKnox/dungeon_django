from django.db import models

class Room(models.Model):
    name = models.CharField("Name", max_length=75)
    description = models.CharField("Description", max_length=250)
    floor = models.CharField("floor")
    width = models.IntegerField("Width")
    length = models.IntegerField("Length")
    doors = models.ManyToManyField('Door')

class Door(models.Model):
    room_a = models.CharField(max_length=50)
    room_b = models.CharField(max_length=50)