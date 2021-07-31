# Self signed certificate

The self signed tdc.demo.local certificate in this folder is used for the local development environment. It is generated using the following command:

```sh
openssl req -x509 -newkey rsa:4096 -out cert.crt -keyout cert.key -days 365 -subj "/C=NL/ST=TdcDemoEnvoy/L=TdcDemoEnvoy/O=TdcDemoEnvoy Name/OU=Org/CN=tdc.demo.local" -nodes -addext "subjectAltName = DNS:tdc.demo.local"
```