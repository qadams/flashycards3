from __future__ import unicode_literals

from django.db import models
from django.core.validators import *

from django.contrib.auth.models import User, Group

from django.contrib import admin

# from pygments.lexers import get_lexer_by_name
# from pygments.formatters.html import HtmlFormatter
# from pygments import highlight

import base64

from django_bleach.models import BleachField

class Event(models.Model):
    eventtype = models.CharField(max_length=1000, blank=False)
    timestamp = models.DateTimeField()
    userid = models.CharField(max_length=1000, blank=True)
    requestor = models.GenericIPAddressField(blank=False)

    def __str__(self):
        return str(self.eventtype)

class EventAdmin(admin.ModelAdmin):
    list_display = ('eventtype', 'timestamp')

class ApiKey(models.Model):
    owner = models.CharField(max_length=1000, blank=False)
    key = models.CharField(max_length=5000, blank=False)

    def __str__(self):
        return str(self.owner) + str(self.key)

class ApiKeyAdmin(admin.ModelAdmin):
    list_display = ('owner','key')

# A Profile is a model that holds a user so they can login.
# Eventually will add back in a profile holding a deck
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name = 'profile')
    def __str__(self):
        return str(self.user)

    class JSONAPIMeta:
        resource_name = "profiles"

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user',)

# A Deck is a model that has name and desription which has an arbitrary amount of flashcards
class Deck(models.Model):
    # profile = models.ForeignKey(Profile, on_delete=models.CASCADE,  related_name = 'decks')
    # name = models.CharField(max_length=50, null=False, blank=False)
    # description = models.CharField(max_length=250, null=False, blank=True)
    name = BleachField(max_length=50, null=False, blank=False)
    description = BleachField(max_length=50, null=False, blank=True)

    def __str__(self):
        return self.name

    class JSONAPIMeta:
        resource_name = "decks"

class DeckAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

# A flashcard has a term and definition which belongs to a deck.
class Flashcard(models.Model):
    parentdeck = models.ForeignKey(Deck, on_delete=models.CASCADE, blank=True, null=True, related_name='flashcards')
    # term = models.TextField(max_length=50, null=True)
    # definition = models.TextField(max_length=250, null=True)
    term = BleachField(max_length=50, null=True)
    definition = BleachField(max_length=250, null=True)

    def __str__(self):
        return str(self.term)
    class JSONAPIMeta:
        resource_name = "flashcards"

class FlashcardAdmin(admin.ModelAdmin):
    list_display = ('term','definition')
