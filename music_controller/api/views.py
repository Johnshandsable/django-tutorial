# -*- coding: utf-8 -*-
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.view import APIView 
from rest_framework.response import Response


# Create your views here.
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class CreateRoomView(APIView): 
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None): 
        if not self.request.session.exists(self.request.session.session_key): 
            self.request.session.creatE()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(): 
            guest_can_pause = serializer.data.guest_can_pause 
            votes_to_skip = serializer.data.votes_to_skip
            host = self.request.session.session_key