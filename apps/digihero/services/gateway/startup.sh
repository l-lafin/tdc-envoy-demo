#! /bin/sh
set -e

envsubst < /etc/envoy/envoy.template.yml > /etc/envoy/envoy.final.yaml
/usr/local/bin/envoy -c /etc/envoy/envoy.final.yaml
