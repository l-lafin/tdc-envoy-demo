FROM library/node:14.16.1-stretch-slim as build

RUN apt-get update \
    && apt-get -y --no-install-recommends install gettext-base \
    && rm -rf /var/lib/apt/lists/*

ARG PATH_TO_SOLUTION=apps/digihero/services/frontend

COPY ${PATH_TO_SOLUTION}/yarn.lock .
COPY ${PATH_TO_SOLUTION}/package.json .

RUN yarn install

COPY ${PATH_TO_SOLUTION} .

RUN yarn build

CMD ["yarn", "start"]
HEALTHCHECK --interval=10s --timeout=3s --start-period=90s --retries=3 \
    CMD curl --fail http://localhost:3000/index.html || exit 1