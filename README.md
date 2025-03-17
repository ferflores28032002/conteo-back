# Back Conteo

## Descripción
Conteo es una aplicación desarrollada en Node.js utilizando TypeScript, Express y Sequelize, diseñada para ofrecer funcionalidades avanzadas como autenticación JWT, manejo de contraseñas encriptadas, y envío de correos a través de la integración con Brevo. Además,


## Tecnologías Utilizadas

- **Node.js**: Plataforma principal.
- **TypeScript**: Lenguaje utilizado para tipado estático.
- **Express**: Framework para la creación de rutas y APIs.
- **Sequelize**: ORM para interactuar con la base de datos PostgreSQL.
- **PostgreSQL**: Sistema de gestión de bases de datos.
- **Brevo**: Servicio de envío de correos.
- **JWT**: Para la autenticación y autorización.
- **bcryptjs**: Para la encriptación de contraseñas.
- **Docker**: Para la contenedorización y despliegue.
- **Class Validator**: Creacion de DTO.


---

## Estructura de Carpetas

La estructura del proyecto es la siguiente:

- **dist/**: Archivos compilados por TypeScript.
- **node_modules/**: Dependencias instaladas.
- **src/**: Código fuente.
  - **config/**: Configuración de la aplicación.
  - **controllers/**: Controladores de las rutas.
  - **database/**: Configuración y modelos de base de datos.
  - **dto/**: Objetos de transferencia de datos.
  - **error/**: Manejo de errores personalizados.
  - **helpers/**: Funciones auxiliares.
  - **middleware/**: Middleware personalizado.
  - **models/**: Definición de los modelos de Sequelize.
  - **routes/**: Definición de rutas de la API.
  - **services/**: Lógica de negocio y servicios.
  - **templates/**: Plantillas HTML para correos.
  - **main.ts**: Punto de entrada de la aplicación.
  - **constants/**: Manejo de constantes en la aplicacion.
  - **server.ts**: Configuración del servidor Express.
- **.env**: Variables de entorno.
- **.env.template**: Plantilla para variables de entorno.
- **package.json**: Archivo de configuración de npm.
- **swaggerDocument.json**: Configuración de Swagger.
- **tsconfig.json**: Configuración de TypeScript.

---
# Proyecto - Guía de Configuración

## Configurar Variables de Entorno

1. Copia el archivo `.env.template` y renómbralo a `.env`.
2. Completa los valores necesarios en el archivo `.env`.

## Inicializar la Base de Datos

1. Configura la conexión en `src/database/index.ts`.
2. Ejecuta las migraciones con Sequelize si es necesario.

## Compilar el Proyecto

Ejecuta el siguiente comando para compilar el código:

```bash
npm run build
```



### 6. Ejecutar en modo desarrollo:

```bash
npm run dev

```
### Ejecutar en modo producción:

```bash
npm run start

```
## Características de la API

- **Autenticación**: Basada en JWT.
- **Manejo de Usuarios**: Registro, verificación de cuenta, recuperación de contraseña.
- **Tareas**: Crear, listar, actualizar y eliminar tareas (autenticación requerida).

Para acceder a funcionalidades sensibles, debes autenticarte con un token JWT válido.

## Características Adicionales

- **Seguridad**:
  - Contraseñas encriptadas con bcryptjs.
  - Tokens de acceso con JWT.
- **Envío de Correos**:
  - Integrado con Brevo para enviar correos de verificación y recuperación de contraseña.
- **Limpieza del Código**:
  - Uso de DTOs y servicios para mantener una arquitectura limpia.
- **Despliegue**:
  - Preparado para ejecutarse en entornos Docker.
  - Desplegado en Railway con PostgreSQL y la API.
