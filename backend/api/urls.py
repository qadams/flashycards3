from django.urls import path, re_path, include
from django.contrib import admin
from api import controllers

#Django Rest Framework
from rest_framework import routers

from django.views.decorators.csrf import csrf_exempt
from rest_framework import renderers

#REST API routes
from rest_framework.routers import DefaultRouter


# Create a router and register our viewsets with it.
# flashcards and decks are accessible routes
router = DefaultRouter(trailing_slash=False)
router.register(r'profiles', controllers.ProfileViewSet)
router.register(r'flashcards', controllers.FlashcardViewSet)
router.register(r'decks', controllers.DeckViewSet)
router.register(r'events', controllers.EventViewSet)


urlpatterns = [
    re_path(r'^session', csrf_exempt(controllers.Session.as_view())),
    re_path(r'^register', csrf_exempt(controllers.Register.as_view())),
    re_path(r'^', include(router.urls)),
]
