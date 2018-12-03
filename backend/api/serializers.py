from rest_framework import serializers
from api.models import Flashcard, Deck, Event

# Converts the flashcard data as needed in order to be passed
class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ('id', 'term', 'definition')

# Converts the deck data as needed in order to be passed
class DeckSerializer(serializers.ModelSerializer):
    flashcards = FlashcardSerializer(read_only=True, many=True)
    class Meta:
        model = Deck
        fields = ('id', 'name', 'description', 'flashcards')

# Not used right now
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
