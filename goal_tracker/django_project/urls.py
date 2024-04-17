"""
URL configuration for django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from front_end.views import serve_react
from django.conf import settings
from front_end.views import serve_react, GoalViewSet
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r'goals', GoalViewSet, basename='goals')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    
    # Updated catch-all pattern that excludes /api
    # This regex matches any path that does NOT start with /api
    re_path(r'^(?!api/).*$', serve_react, {"document_root": settings.REACT_APP_BUILD_PATH}),
]
