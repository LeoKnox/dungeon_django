from rest_framework import serializers
from .models import Room, Door

class RoomSerializer(serializers.ModelSerializer):
    #doors = serializers.RelatedField(queryset = Door.objects.all(), many=True)
    doors = serializers.PrimaryKeyRelatedField(queryset = Door.objects.all(), many=True)
    class Meta:
        model = Room
        fields = ('pk', 'name', 'description', 'floor', 'width', 'length', 'doors')

class DoorSerializer(serializers.ModelSerializer):
    rooms = RoomSerializer(many = True, read_only = True)
    class Meta:
        model = Door
        fields = ('pk', 'room_a', 'room_b', 'rooms')