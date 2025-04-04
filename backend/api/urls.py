from django.contrib import admin
from django.urls import path
from django.urls import include
from rest_framework.routers import DefaultRouter
from .views import Item_view_set


urlpatterns = [
    path('filter/<str:query>',index,  include(router.urls))
]
