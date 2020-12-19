from django.db import models

class Door(models.Model):
    room_a = models.IntegerField(primary_key=True)
    room_b = models.IntegerField()

class Room(models.Model):
    name = models.CharField("Name", max_length=75)
    description = models.CharField("Description", max_length=250)
    floor = models.CharField("floor", max_length=75)
    width = models.IntegerField("Width")
    length = models.IntegerField("Length")
    doors = models.ManyToManyField(Door)