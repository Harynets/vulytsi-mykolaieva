from . import views
from django.urls import path

urlpatterns=[
    path("street/<str:name>", views.StreetRetrieve.as_view(), name="street_retrieve"),
]