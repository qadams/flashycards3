from rest_framework import serializers
from api.models import Flashcard, Deck, Event

# Converts the flashcard data as needed in order to be passed
class DeckInlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ('id', 'name', 'description', 'flashcards')

# class FlashcardSerializer(serializers.ModelSerializer):
#     parentdeck = DeckInlineSerializer()
#     class Meta:
#         model = Flashcard
#         fields = ('id', 'term', 'definition', 'parentdeck')

class FlashcardSerializer(serializers.ModelSerializer):
    parentdeck = DeckInlineSerializer(read_only=True, many=True)
    # parentdeck = DeckSerializer()
    class Meta:
        model = Flashcard
        fields = ('id', 'term', 'definition', 'parentdeck')
    # def create(self, validated_data):
    #     parentdeck_parsed = validated_data.pop('parentdeck')
    #     flashcard = Flashcard.objects.create(**validated_data)
    #     Deck.objects.create(flashcard=flashcard, **parentdeck_parsed)
    #     return flashcard

    # def create(self, validated_data):
    # 	parentdeck_parsed = validated_data.pop('parentdeck')
    # 	parentdeck = Deck.get_object_or_create(id=parentdeck_parsed.id)
    # 	flashcard = Flashcard.objects.create(parentdeck=parentdeck, **validated_data)
    # 	return flashcard
    #
    # def update(self, instance, validated_data):
    #     parentdeck_parsed = validated_data.pop('parentdeck')
    #     parentdeck = instance.parentdeck
    #
    #     instance.term = validated_data.get('term', instance.term)
    #     instance.definition = validated_data.get('definition', instance.definition)
    #     instance.save()

        # profile.is_premium_member = profile_data.get(
        #     'is_premium_member',
        #     profile.is_premium_member
        # )
        # profile.has_support_contract = profile_data.get(
        #     'has_support_contract',
        #     profile.has_support_contract
        #  )
        # profile.save()
        #
        # return instance


# Converts the deck data as needed in order to be passed
class DeckSerializer(serializers.ModelSerializer):
    flashcards = FlashcardSerializer(read_only=True, many=True)
    class Meta:
        model = Deck
        fields = ('id', 'name', 'description', 'flashcards')
# class DeckSerializer(serializers.ModelSerializer):
#     flashcards = FlashcardSerializer()
#     class Meta:
#         model = Deck
#         fields = ('id', 'name', 'description', 'flashcards')
    # def create(self, validated_data):
    #     flashcards_parsed = validated_data.pop('flashcards')
    #     deck = Deck.objects.create(**validated_data)
    #     Flashcard.objects.create(deck=deck, **flashcards_parsed)
    #     return deck
# Not used right now
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
