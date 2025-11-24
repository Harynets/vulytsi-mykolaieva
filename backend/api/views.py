from rest_framework import generics
from .models import Street, Person
from .serializers import StreetSerializer, StreetNameSerializer, PersonSerializer


class StreetRetrieve(generics.RetrieveAPIView):
    queryset = Street.objects.all()
    serializer_class = StreetSerializer
    lookup_field = "name"


class StreetList(generics.ListAPIView):
    queryset = Street.objects.all()
    serializer_class = StreetNameSerializer


class PersonRetrieve(generics.RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    lookup_field = "name"


class PersonList(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer