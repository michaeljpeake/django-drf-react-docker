# Official base image, specific version of Python to ensure compatibility
FROM python:3.9.7-alpine

# install psycopg2 dependencies (this is only required because we're using the alpine image)
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

WORKDIR /code

# some of these are overwritten by docker-compose but are require for the build
ENV ALLOWED_HOSTS=localhost \
    DJANGO_ALLOWED_HOSTS=localhost \
    DJANGO_SECRET_KEY=temp \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

COPY requirements.txt /code/
RUN pip install -r requirements.txt

COPY . /code/

RUN chmod +x /code/entrypoint.sh

# We don't need to do this here, but it saves having to remember to do it after the build
RUN python manage.py collectstatic

ENTRYPOINT ["/code/entrypoint.sh"]
