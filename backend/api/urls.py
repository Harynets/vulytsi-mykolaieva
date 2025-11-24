from . import views
from django.urls import path

urlpatterns=[
    path("street/<str:name>", views.StreetRetrieve.as_view(), name="street_retrieve"),
    path("street_list/", views.StreetList.as_view(), name="street_list"),
    path("person_list/", views.PersonList.as_view(), name="person_list")
]