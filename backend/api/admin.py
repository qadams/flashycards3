from django.contrib import admin

#if ENVIRONMENT == 'PROD':
#	from api.models import *
#else:
from api.models import *

# Register deck and flashcard and Profile models here
# Note: May add a profile model
admin.site.register(Deck, DeckAdmin)
admin.site.register(Flashcard, FlashcardAdmin)
admin.site.register(Profile, ProfileAdmin)

admin.site.register(Event, EventAdmin)
admin.site.register(ApiKey, ApiKeyAdmin)
