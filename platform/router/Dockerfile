FROM envoyproxy/envoy-alpine:v1.19.0

COPY envoy.yml /etc/envoy/envoy.yaml
COPY ./ssl/ /etc/ssl/

EXPOSE 443
EXPOSE 9090

CMD ["/usr/local/bin/envoy", "-c", "/etc/envoy/envoy.yaml"]

HEALTHCHECK --interval=10s --timeout=3s --retries=3 --start-period=90s \
    CMD wget --quiet --tries=1 --spider --proxy off http://localhost:9090/ready || exit 1
