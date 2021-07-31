# DEX Identity Provider

This is a local only identity provider that is used for local testing purposes.

It is configured with some static config to make it easy to use in testing

There is a single user configured with a static password the users is `digidev@tdc.local` with the password `password`.
In the current implementation the password is already filled in and just click proceed to continue.

It is configured to be accessed over HTTPS with a certificate that is stored in this repo and mounted into the container.

## Generation of the certificate

The self signed certificate in the `config` folder was generated using the following command:

```bash
openssl req -newkey rsa:4096 -keyout dex.tdc.digi.hero.local.key -subj "/C=NL/ST=TdcDemoEnvoy/L=TdcDemoEnvoy/O=TdcDemoEnvoy Name/OU=Org/CN=dex.tdc.digi.hero.local" -nodes -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "\n[SAN]\nsubjectAltName=DNS:dex.tdc.digi.hero.local")) -out dex.tdc.digi.hero.local.csr

openssl x509 -req -extfile <(printf "subjectAltName=DNS:dex.tdc.digi.hero.local") -days 365 -in dex.tdc.digi.hero.local.csr -CA ../../router/ssl/cert.crt -CAkey ../../router/ssl/cert.key -CAcreateserial -out dex.tdc.digi.hero.local.crt

rm dex.tdc.digi.hero.local.csr
```
