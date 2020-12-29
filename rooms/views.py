from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Room, Door

from .serializers import *

@api_view(['GET', 'POST'])
def rooms_list(request):
    if request.method == 'GET':
        data = Room.objects.all()

        serializer = RoomSerializer(data, context={'request': request}, many = True)
        serializer.data[0]['doors'] = 1
        serializer.data[1]['doors'] = 1
        serializer.data[2]['doors'] = 1
        #for x in range(len(serializer.data)):
        #    serializer.data[x].doors = 3
        #quertyset = Door.objects.all()
        #serializerT = RoomSerializer()

        return Response(serializer.data)
        #return Response(serializerT.data)

    elif request.method == 'POST':
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def rooms_detail(request, pk):
    try:
        room = Room.objects.get(pk=pk)
        print(room.name)
    except Room.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomSerializer(room)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = RoomSerializer(room, data=request.data,context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def single_room(request, pk):
    try:
        room = Room.objects.get(pk=pk)
    except RoomDoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)