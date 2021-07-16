FROM envoyproxy/envoy-alpine:v1.18.2

RUN apk update && \
    apk add --no-cache \
    gettext \
    openssl && \
    rm /var/cache/apk/*

COPY ./lib/util.lua /lib/util.lua
COPY ./startup.sh /startup.sh
COPY ./envoy.template.yml /etc/envoy/envoy.template.yml

RUN chmod -R 777 lib/util.lua /etc/envoy 

# Metrics port to collect info such as cpu, ram, etc using tools such as Prometheus
EXPOSE 9090
# Gateway listener port
EXPOSE 8080

CMD ["./startup.sh"]