#from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import *
from django.contrib.auth import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
#from django.shortcuts import render_to_response
from django.template import RequestContext
from django_filters.rest_framework import DjangoFilterBackend


from django.shortcuts import *

# Import models
from django.db import models
from django.contrib.auth.models import *
from api.models import *
from api.serializers import *

#REST API
from rest_framework import viewsets, filters, parsers, renderers
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *
from rest_framework.decorators import *
from rest_framework.authentication import *

#filters
#from filters.mixins import *

from api.pagination import *
import json, datetime, pytz
from django.core import serializers
from django.core.validators import *
import requests

from rest_framework import viewsets
from django.shortcuts import get_object_or_404

def home(request):
   """
   Send requests to / to the ember.js clientside app
   """
   return render_to_response('ember/index.html',
               {}, RequestContext(request))

def xss_example(request):
  """
  Send requests to xss-example/ to the insecure client app
  """
  return render_to_response('dumb-test-app/index.html',
              {}, RequestContext(request))

# This will need some handling done to it to properly handle registration
class Register(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.data.get('username') #you need to apply validators to these
        password = request.data.get('password') #you need to apply validators to these

        # print(request.POST.get('username'))
        if User.objects.filter(username=username).exists():
            return Response({'username': 'Username is taken.', 'status': 'error'})

        #especially before you pass them in here
        newuser = User.objects.create_user(username=username, password=password)
        newuser.save()

        #Get the Profile and save it
        newprofile = Profile(user=newuser)
        newprofile.save()

        return Response({'status': 'success', 'userid': newuser.id, 'profile': newprofile.id})

# This will need some work done to it in order to properly handle
# sessions
class Session(APIView):
    permission_classes = (AllowAny,)
    #parser_classes = (parsers.JSONParser,)
    def form_response(self, isauthenticated, userid, username, error=""):
        serializer = ''
        profileData = ''
        if(userid is not None):
            serializer = ProfileSerializer(get_object_or_404(Profile, user__id=userid))
            profileData = serializer.data
        data = {
            'isauthenticated': isauthenticated,
            'userid': userid,
            'username': username,
            'profile': profileData
        }
        if error:
            data['message'] = error

        return Response(data)

    def get(self, request, *args, **kwargs):
        # Get the current user
        if request.user.is_authenticated:
            return self.form_response(True, request.user.id, request.user.username)
        return self.form_response(False, None, None)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return self.form_response(True, user.id, user.username)
            return self.form_response(False, None, None, "Account is suspended")
        return self.form_response(False, None, None, "Invalid username or password")

    def delete(self, request, *args, **kwargs):
        # Logout
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)

class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Event to be CRUDed.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ActivateIFTTT(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

class FlashcardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Flashcard to be CRUDed.
    This flashcard set is a viewset allowing flashcards
    to be created.
    """
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer

    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,
    #                       IsOwnerOrReadOnly,)
    #
    # @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    # def highlight(self, request, *args, **kwargs):
    #     flashcard = self.get_object()
    #     return Response(flashcard.highlighted)
    #
    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

class DeckViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Deck to be CRUDed.
    This deck set is a viewset allowing decks
    to be created.
    """
    queryset = Deck.objects.all()
    serializer_class = DeckSerializer

    # def create(self, request, *args, **kwargs):
    #     print('REQUEST DATA')
    #     print(str(request.data.get('profile')))
    #     name = request.data.get('name')
    #     description = request.data.get('description')
    #     profile = Profile.objects.get(pk= (request.data.get('profile').get('id')))
    #     newDeck = Deck(
    #         name=name,
    #         description=description,
    #         profile=profile,
    #     )
    #     newDeck.save()
    #     return Response({'success': True}, status=status.HTTP_200_OK)

    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,
    #                       IsOwnerOrReadOnly,)
    #
    # @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    # def highlight(self, request, *args, **kwargs):
    #     deck = self.get_object()
    #     return Response(deck.highlighted)
    #
    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

# class Register(APIView):
#     permission_classes = (AllowAny,)
#     parser_classes = (parsers.JSONParser,)
#
#     def post(self, request, *args, **kwargs):
#         # Login
#         username = request.POST.get('username') #you need to apply validators to these
#         print (username)
#         password = request.POST.get('password') #you need to apply validators to these
#         # email = request.POST.get('email') #you need to apply validators to these
#         # gender = request.POST.get('gender') #you need to apply validators to these
#         # age = request.POST.get('age') #you need to apply validators to these
#         # educationlevel = request.POST.get('educationlevel') #you need to apply validators to these
#         # city = request.POST.get('city') #you need to apply validators to these
#         # state = request.POST.get('state') #you need to apply validators to these
#
#         print (request.POST.get('username'))
#         if User.objects.filter(username=username).exists():
#             return Response({'username': 'Username is taken.', 'status': 'error'})
#         elif User.objects.filter(email=email).exists():
#             return Response({'email': 'Email is taken.', 'status': 'error'})
#
#         #especially before you pass them in here
#         newuser = User.objects.create_user(email=email, username=username, password=password)
#         newprofile = Profile(user=newuser, gender=gender, age=age, educationlevel=educationlevel, city=city, state=state)
#         newprofile.save()
#
#         return Response({'status': 'success', 'userid': newuser.id, 'profile': newprofile.id})

# class Session(APIView):
#     permission_classes = (AllowAny,)
#     def form_response(self, isauthenticated, userid, username, error=""):
#         data = {
#             'isauthenticated': isauthenticated,
#             'userid': userid,
#             'username': username
#         }
#         if error:
#             data['message'] = error
#
#         return Response(data)
#
#     def get(self, request, *args, **kwargs):
#         # Get the current user
#         if request.user.is_authenticated:
#             return self.form_response(True, request.user.id, request.user.username)
#         return self.form_response(False, None, None)
#
#     def post(self, request, *args, **kwargs):
#         # Login
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         user = authenticate(username=username, password=password)
#         if user is not None:
#             if user.is_active:
#                 login(request, user)
#                 return self.form_response(True, user.id, user.username)
#             return self.form_response(False, None, None, "Account is suspended")
#         return self.form_response(False, None, None, "Invalid username or password")
#
#     def delete(self, request, *args, **kwargs):
#         # Logout
#         logout(request)
#         return Response(status=status.HTTP_204_NO_CONTENT)
