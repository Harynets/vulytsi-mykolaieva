from rest_framework import generics
from .models import Street
from .serializers import StreetSerializer

class StreetRetrieve(generics.RetrieveAPIView):
    queryset = Street.objects.all()
    serializer_class = StreetSerializer
    lookup_field = "name"
