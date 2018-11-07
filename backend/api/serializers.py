from rest_framework import serializers
from models import Flashcard, Deck

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = "__all__"

class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = "__all__"
