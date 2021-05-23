FROM python:3.8.8-slim as base

LABEL authors="Manpreet Singh <mann.singh579@gmail.com>"

ENV PYTHONBUFFERED=1 PYTHONDONTWRITEBYTECODE=1 INSIDE_DOCKER=1

RUN apt update
RUN apt install -y --no-install-recommends \
    gettext \
    curl

ENV WAITFORIT_VERSION="v2.4.1"
RUN curl -o /usr/local/bin/waitforit -sSL https://github.com/maxcnunes/waitforit/releases/download/$WAITFORIT_VERSION/waitforit-linux_amd64 && \
    chmod +x /usr/local/bin/waitforit

RUN apt update
RUN apt install -y --upgrade "postgresql-client" "postgresql-contrib" "postgresql" bash curl
RUN apt install -y --upgrade g++ gcc make libffi-dev wget

RUN apt install -y --upgrade python3 python3-dev

RUN pip3 install --upgrade pip 
ADD backend/requirements/base.txt /tmp
RUN pip3 install -r /tmp/base.txt

RUN mkdir -p /data/static

COPY . /code/
WORKDIR /code

VOLUME /data

EXPOSE 8000

## Dev
FROM base AS dev
CMD ["dev"]

## Production image
FROM base as official

RUN useradd -ms /bin/bash backend \
    && chown backend: /code \
    && chown backend: /data

USER backend
