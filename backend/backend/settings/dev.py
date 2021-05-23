from .base import *
import os, sys

DEBUG = True
IS_DEV = True
IS_STAGING = False
IS_PROD = False
CORS_ALLOW_ALL_ORIGINS = True
ALLOWED_HOSTS = ["*"]

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000'
]

DATA_VOLUME = "/data"

# Database settings
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "%s" % os.getenv("POSTGRES_DB"),
        "USER": "%s" % os.getenv("POSTGRES_USER"),
        "PASSWORD": "%s" % os.getenv("POSTGRES_PASSWORD"),
        "HOST": "%s" % os.getenv("POSTGRES_HOST"),
        "PORT": os.getenv("POSTGRES_PORT", 5432),
    }
}

UPLOADS_DIR_NAME = "uploads"
MEDIA_URL = "/%s/" % UPLOADS_DIR_NAME
MEDIA_ROOT = os.path.join(DATA_VOLUME, "%s" % UPLOADS_DIR_NAME)

FILE_UPLOAD_MAX_MEMORY_SIZE = 4194304  # 4mb
MEDIA_ROOT = os.path.join(DATA_VOLUME, "%s" % UPLOADS_DIR_NAME)
STATIC_ROOT = "%s/staticserve" % DATA_VOLUME
