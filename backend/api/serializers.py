from rest_framework import serializers
from .models import Street, Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"


class StreetSerializer(serializers.ModelSerializer):
    person = PersonSerializer(read_only=True)
    class Meta:
        model = Street
        fields = "__all__"
