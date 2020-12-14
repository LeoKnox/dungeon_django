from rest_framework import serializers
from .models import Room, Door

class RoomSerializer(serializers.ModelSerializer):
    rooms = serializers.PrimaryKeyRelatedField(Room.objects.all(), many=True)
    class Meta:
        model = Room
        fields = ('pk', 'name', 'description', 'floor', 'width', 'length')

class DoorSerializer(serializers.ModelSerializer):
    door_list = RoomSerializer(many = True, read_only = True)
    class Meta:
        model = Door
        fields = ('pk', 'room_a', 'room_b')