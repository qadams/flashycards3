# from django.conf.urls import include, url

#Django Rest Framework
# from rest_framework import routers

# from django.views.decorators.csrf import csrf_exempt
# from rest_framework import renderers

#REST API routes
# router = routers.DefaultRouter(trailing_slash=False)
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import controllers

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'flashcards', controllers.FlashcardViewSet)
router.register(r'decks', controllers.DeckViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]

# urlpatterns = [
#     url(r'^session', csrf_exempt(controllers.Session.as_view())),
#     url(r'^register', csrf_exempt(controllers.Register.as_view())),
#     url(r'^events', csrf_exempt(controllers.Events.as_view())),
#     url(r'^activateifttt', csrf_exempt(controllers.ActivateIFTTT.as_view())),
#     url(r'^', include(router.urls)),
# ]
