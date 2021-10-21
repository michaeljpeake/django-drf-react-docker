#!/bin/sh

if [ "$SQL_ENGINE" = "django.db.backends.postgresql" ]
then
  echo "Waiting for PostgreSQL..."
  while ! nc -z $SQL_HOST $SQL_PORT; do
    sleep 0.1
  done
  echo "PostgreSQL started"
fi

python manage.py migrate --noinput

exec "$@"
