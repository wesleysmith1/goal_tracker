import posixpath
import os
from pathlib import Path

from django.http import JsonResponse, Http404, HttpResponseServerError
from django.utils._os import safe_join
from django.views.static import serve as static_serve

# Create your views here.
def serve_react(request, path, document_root=None):
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