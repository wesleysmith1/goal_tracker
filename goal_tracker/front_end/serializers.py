from rest_framework import serializers
from .models import Meditation

class MeditationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meditation
        fields = ['id', 'title', 'duration', 'created_at', 'notes', 'satisfaction']