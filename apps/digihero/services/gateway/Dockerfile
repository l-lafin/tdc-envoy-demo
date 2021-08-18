FROM envoyproxy/envoy-alpine:v1.19.0

RUN apk update && \
    apk add --no-cache \
    gettext  && \
    rm /var/cache/apk/*

RUN chmod go+rw /etc/envoy

COPY ./startup.sh /startup.sh
COPY ./envoy.template.yml /etc/envoy/envoy.template.yml

# Metrics port to collect info such as cpu, ram, etc using tools such as Prometheus
EXPOSE 9999
# Gateway listener port
EXPOSE 8080

CMD ["./startup.sh"]

HEALTHCHECK --interval=10s --timeout=3s --retries=3 --start-period=90s \
    CMD wget --quiet --tries=1 --spider --proxy off http://localhost:9999/ready || exit 1