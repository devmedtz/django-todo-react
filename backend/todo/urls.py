from django.urls import path, include
from rest_framework import routers

from .import views

router = routers.DefaultRouter()
router.register('todos', views.TodoView, 'todo')

urlpatterns = [
    path('api/', include(router.urls)),
]