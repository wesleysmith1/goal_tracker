import posixpath
import os
from pathlib import Path

from django.http import JsonResponse, Http404, HttpResponseServerError
from django.utils._os import safe_join
from django.views.static import serve as static_serve

from rest_framework.response import Response
from rest_framework import viewsets, status
from django.utils.timezone import now

from .models import Goal
from .serializers import GoalSerializer

# Create your views here.
def serve_react(request, path='', document_root=None):
    if not document_root or not os.path.isdir(document_root):
        # Log the error for debugging
        # logger.error(f"Invalid document_root: {document_root}")
        # Return a server error response or redirect to a custom error page
        return HttpResponseServerError("Server configuration error.")

    path = posixpath.normpath(path).lstrip("/")
    fullpath = Path(safe_join(document_root, path))

    # Check if the requested path is a file and exists
    if fullpath.is_file():
        return static_serve(request, path, document_root=document_root)
    else:
        # Fallback to index.html, but first check if it exists
        index_path = Path(safe_join(document_root, "index.html"))
        if not index_path.is_file():
            # Log the error for debugging
            # logger.error(f"Missing index.html in document_root: {document_root}")
            # Return a 404 response or redirect to a custom error page
            return Http404("index.html not found.")

        return static_serve(request, "index.html", document_root=document_root)
    

# class GoalViewSet(viewsets.ModelViewSet):
#     queryset = Goal.objects.all()
#     serializer_class = GoalSerializer

#     def get_queryset(self):
#         print(f"get query set called!!!")
#         # Create a mock queryset using the model
#         # In a real application, you'd return actual database records
#         entry1 = Goal(id=1, title='Entry 1')
#         entry2 = Goal(id=2, title='Entry 2')
#         return [entry1, entry2]  # Return a list of model instances

#     # def create(self, request, *args, **kwargs):
#     #     print(f"You tried to add '{request.data}'")
#     #     # You can manually create a Goal instance here if needed
#     #     return Response({"message": "Goal added", "data": request.data}, status=status.HTTP_201_CREATED)

#     # def update(self, request, pk=None, *args, **kwargs):
#     #     print(f"You tried to update entry {pk} with '{request.data}'")
#     #     # You can manually update a Goal instance here if needed
#     #     return Response({"message": "Goal updated", "data": request.data}, status=status.HTTP_200_OK)
    
#     def create(self, request, *args, **kwargs):
#         print(f"You tried to add '{request.data}'")
#         # Here, you can handle creation with DRF's default behavior or customize it
#         return super().create(request, *args, **kwargs)

#     def update(self, request, pk=None, *args, **kwargs):
#         print(f"You tried to update entry {pk} with '{request.data}'")
#         # Here, you can handle updates with DRF's default behavior or customize it
#         return super().update(request, *args, **kwargs)

class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer

    def create(self, request, *args, **kwargs):
        print(f"Creating a new goal with data {request.data}")
        return super().create(request, *args, **kwargs)

    def update(self, request, pk=None, *args, **kwargs):
        print(f"Updating goal {pk} with data {request.data}")
        return super().update(request, pk, *args, **kwargs)