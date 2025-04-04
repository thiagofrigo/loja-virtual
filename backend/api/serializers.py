from rest_framework import serializers
from .models import Item

class Item_serializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

