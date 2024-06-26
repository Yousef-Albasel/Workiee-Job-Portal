from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
path('profile', views.profile, name='profile'),
    path('update_profile/', views.update_user_profile, name='update_user_profile'),
    path('delete_application/<int:id>/', views.delete_application, name='delete_application'),
]
