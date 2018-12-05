from rest_framework import serializers
from api.models import Flashcard, Deck, Event

# Converts the flashcard data as needed in order to be passed
class DeckInlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ('id',)

# class FlashcardSerializer(serializers.ModelSerializer):
#     parentdeck = DeckInlineSerializer()
#     class Meta:
#         model = Flashcard
#         fields = ('id', 'term', 'definition', 'parentdeck')

# google message and find doc on overriding update method save model in model
class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ('id', 'term', 'definition')
        extra_kwargs = {
            'id': {
                'read_only': False,
                'required': True
             }
        } #very important
        
    def create(self, request):
        serialized = self.serializer_class(data=request.DATA)
        if serialized.is_valid():
            serialized.save()
            return Response(status=HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, instance, validated_data):
        # Update the  instance
        instance.parentdeck = validated_data['parentdeck']
        instance.save()

        # Delete any detail not included in the request
        flashcard_ids = [item['flashcard_id'] for item in validated_data['flashcards']]
        for flashcard in cars.flashcards.all(): ###
            if flashcard.id not in flashcard_ids:
                flashcard.delete()

        # Create or update flashcard
        for flashcard in validated_data['flashcards']:
            flashcardObj = Flashcard.objects.get(pk=item['id'])
            if flashcardObj:
                flashcardObj.parentdeck=item['parentdeck']
                ....fields... ###
            else:
               flashcardObj = Flashcard.create(flashcard=instance,**flashcard)
            flashcardObj.save()

        return instance

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
