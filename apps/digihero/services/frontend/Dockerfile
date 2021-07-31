FROM library/node:14.16.1-stretch-slim

WORKDIR /var/app/

RUN apt-get update \
    && apt-get -y --no-install-recommends install gettext-base \
    && rm -rf /var/lib/apt/lists/*

ARG PATH_TO_SOLUTION=apps/digihero/services/frontend
COPY ${PATH_TO_SOLUTION}/yarn.lock .
COPY ${PATH_TO_SOLUTION}/package.json .
COPY ${PATH_TO_SOLUTION}/. .

RUN yarn install

CMD ["yarn", "start"]
HEALTHCHECK --interval=10s --timeout=3s --start-period=90s --retries=3 \
    CMD curl --fail http://localhost:3000/index.html || exit 1