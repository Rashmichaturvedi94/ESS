#!/bin/bash
set -e

if [ $# -eq 0 ]; then
	exec gunicorn backend.wsgi -c /code/gunicorn.py
else
	CELERY_CONCURRENCY="${CELERY_CONCURRENCY:-1}"
	case "$1" in
	"dev")
		waitforit -host=$POSTGRES_HOST -port=5432 --timeout 30
		python manage.py collectstatic --no-input
		python manage.py migrate
		watchmedo auto-restart -d backend/ -p '*.py' --recursive -- python manage.py runserver 0.0.0.0:8000
		;;
	"worker")
		python manage.py migrate --check
		watchmedo auto-restart -d backend/ -p '*.py' --recursive -- celery -A django_backend.celery_config worker --concurrency=$CELERY_CONCURRENCY -E -l info
		;;
	"upgrade")
		waitforit -host=$POSTGRES_HOST -port=5432 --timeout 45
		python manage.py collectstatic --no-input
		python manage.py migrate
		;;
	"test")
		waitforit -host=$POSTGRES_HOST -port=5432 --timeout 30
		python manage.py migrate
		poetry run pytest --junit-xml=./report.xml
		;;
	"beat")
		rm -rf /tmp/celerybeat.pid
		python manage.py migrate --check
		watchmedo auto-restart -d backend/ -p '*.py' --recursive -- celery -A django_backend.celery_config beat --pidfile= -l info
		;;
	*)
		exec "$@"
		;;
	esac
fi
