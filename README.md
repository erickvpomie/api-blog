# Blog Challenge (México Blog)

Este proyecto es un blog desarrollado en node.js.

## Requisitos

Asegúrate de tener instalado lo siguiente antes de ejecutar el proyecto:

- Node.js
- npm (Node Package Manager)

## Tecnologías utilizadas

Con la intención de utilizar sólo los recursos necesarios en este proyecto, se contaron con las siguientes librerias.

- express.js: Framework para el desarrollo de aplicaciones web en node.js
- cors: Libreria para habilitar el acceso a recursos de otros dominios
- dotenv: Libreria para el manejo de variables de entorno
- luxon: Libreria para el manejo de fechas
- morgan: Libreria para el manejo de logs

## Instalación

Para poder instalar el proyecto de manera local sigue los siguientes pasos:

- Clona este repositorio
- Instala las dependencias
```bash
  npm install
```
- Esta aplicación está configurada para ejecutarse con una base de datos en la nube por lo que necesitaras agregar las siguientes variables de entorno en un archivo .env:
```bash
  DATABASE_URL=libsql://blog-db-erickvpomie.turso.io
  DATABASE_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTI1VDAzOjM4OjM0LjQxNTExMDU4N1oiLCJpZCI6IjM0YTU2MDVmLWJiMmUtMTFlZS1iNDBiLTMyMGQ3MGVmNTM4MiJ9.imN03vTlbn1BNhkgKnS_PfA8aXRQx_2LgzW3otmxcTmSsoVG8MDnS950Kl4ZFhVEMJ5_jm8L3AAe_G4YK59ZAQ
```
Si deseas ejecutar el proyecto con una base de datos local, puedes revisar el archivo src/db.js y cambiar la configuración

- Ejecutar este proyecto con el siguiente comando:

```bash
  npm run dev
```
- Tendremos el proyecto corriendo en el puerto 3000 listo para ser consumido
