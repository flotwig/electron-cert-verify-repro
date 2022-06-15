# electron-cert-verify-repro

To reproduce the issue:

```sh
yarn
yarn add --dev electron@17.0.0-alpha.3
yarn start
## Observe that no stderr about certs is printed.
## Ctrl+C
yarn add --dev electron@17.0.0-alpha.4
yarn start
## Observe 3 lines of stderr about CertVerifyProcBuiltin failed
## Ctrl+C
yarn add --dev electron@19.0.4
## Observe issue still exists in latest Electron
## Ctrl+C
```
