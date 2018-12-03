from __future__ import unicode_literals

from django.db import models
from django.core.validators import *

from django.contrib.auth.models import User, Group

from django.contrib import admin

# from pygments.lexers import get_lexer_by_name
# from pygments.formatters.html import HtmlFormatter
# from pygments import highlight

import base64

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

# A Deck is a model that has name and desription which has an arbitrary amount of flashcards
class Deck(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    description = models.CharField(max_length=250, null=False, blank=True)

    def __str__(self):
        return self.name

    class JSONAPIMeta:
        resource_name = "decks"

class DeckAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

# A flashcard has a term and definition which belongs to a deck.
class Flashcard(models.Model):
    parentdeck = models.ForeignKey(Deck, on_delete=models.CASCADE, blank=True, null=True, related_name='flashcards')
    term = models.TextField(max_length=50, null=True)
    definition = models.TextField(max_length=250, null=True)
    def __str__(self):
        return self.term
    class JSONAPIMeta:
        resource_name = "flashcards"

class FlashcardAdmin(admin.ModelAdmin):
    list_display = ('term','definition')
