# Self signed certificate

The self signed certificate in the `ssl` folder was generated using the following command:

```sh
openssl req -x509 -newkey rsa:4096 -out cert.crt -keyout cert.key -days 365 -subj "/C=NL/ST=TdcDemoEnvoy/L=TdcDemoEnvoy/O=TdcDemoEnvoy Name/OU=Org/CN=tdc.demo.local" -nodes -addext "subjectAltName = DNS:tdc.demo.local"
```
