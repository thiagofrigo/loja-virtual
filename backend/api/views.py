from django.shortcuts import render
from rest_framework import viewsets
from .models import Item
from .serializers import Item_serializer

# Create your views here.
class Item_view_set(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = Item_serializer