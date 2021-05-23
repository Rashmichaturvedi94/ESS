# Dev stage.
FROM node:14.15.5-alpine3.13 AS dev

RUN apk add --no-cache --upgrade \
    bash \
    'openssl>=1.1.1i-r0' \
    'libxml2>=2.9.10-r5' \
    'freetype>=2.10.4-r0'

WORKDIR /code

ADD package.json yarn.lock /code/

RUN yarn install --frozen-lockfile

ADD ./ ./

EXPOSE 3000


# Dist builder stage
FROM dev AS dist-builder

# RUN npm prune --production
ENV REACT_APP_API_URL=/api/
RUN yarn run build


# Dist stage.
FROM nginx:1.19-alpine AS dist

RUN apk add --no-cache --upgrade \
    bash \
    'openssl>=1.1.1i-r0' \
    'libxml2>=2.9.10-r5' \
    'freetype>=2.10.4-r0'

WORKDIR /code

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=dist-builder --chown=root:root /code/build/ ./

EXPOSE 80

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
