from rest_framework import serializers
from api.models import Flashcard, Deck, Event

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ('id', 'term', 'definition')

class DeckSerializer(serializers.ModelSerializer):
    flashcards = FlashcardSerializer(read_only=True, many=True)
    class Meta:
        model = Deck
        fields = ('id', 'name', 'description', 'flashcards')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
