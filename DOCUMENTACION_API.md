# Documentación de la API de streaming

## Necesidad del servicio

La empresa ficticia **CineNube** requiere un servicio de streaming para organizar su catálogo de películas, administrar las cuentas de sus suscriptores y permitir consultar las calificaciones asociadas a cada usuario y película. La API REST fue desarrollada con Node.js, Express y Mongoose; entrega y recibe información en formato JSON.

## Almacenamiento y configuración

Se utiliza **MongoDB**, un gestor NoSQL orientado a documentos BSON. Su modelo flexible permite almacenar estructuras anidadas, como los perfiles de usuario, el reparto de una película y las estadísticas de calificación. La API utiliza Mongoose para definir esquemas y comunicarse con la base de datos.

Las colecciones implementadas son:

- **usuarios**: correo, hash de contraseña, nombre, país, fecha de registro, suscripción y perfiles.
- **peliculas**: títulos, tipo, año, géneros, duración, sinopsis, director, reparto, idiomas, clasificación, enlaces, estadísticas, fecha de publicación y estado `activa`.
- **calificaciones**: identificadores de usuario y película, perfil, puntaje, comentario, fecha y título de la película.

Los pasos para construir el almacenamiento fueron:

1. Definir los campos y tipos de datos en los esquemas Mongoose de `api/models`.
2. Crear cada colección e insertar datos de ejemplo mediante los scripts `scripts_db/usuarios.js`, `scripts_db/peliculas.js` y `scripts_db/calificaciones.js`.
3. Ejecutar los scripts desde `mongosh`, conectado a la base de datos elegida, en el orden anterior.
4. Configurar `MONGODB_URI` en el archivo `.env` con la cadena de conexión de MongoDB. La aplicación carga esta variable con `dotenv`; el puerto se configura con `PORT` y, si no se indica, utiliza `3000`.
5. Iniciar la API desde la carpeta `api` con `npm start`.

## Endpoints

La dirección base local es `http://localhost:3000`. Los identificadores `:id`, `:usuario_id` y `:pelicula_id` corresponden al `_id` de MongoDB, salvo las calificaciones, que filtran por sus campos `usuario_id` y `pelicula_id`.

| Método y ruta | Parámetros / cuerpo | Resultado |
|---|---|---|
| `GET /api/peliculas` | Ninguno | Lista todas las películas. |
| `GET /api/peliculas/activas` | Ninguno | Lista las películas con `activa: true`. |
| `GET /api/peliculas/mejor-calificadas` | Ninguno | Hasta 10 películas, ordenadas por promedio y cantidad de calificaciones descendentes. |
| `POST /api/peliculas/create` | JSON con `titulo`, `titulo_original`, `tipo`, `anio` y `generos` obligatorios. | Crea la película y devuelve el documento creado (`201`); campos ausentes o que no pasan la validación básica producen `400`. |
| `DELETE /api/peliculas/:id` | ID de la película en la ruta. | Desactiva la película (`activa: false`) y devuelve el documento actualizado; responde `404` si no existe. |
| `GET /api/usuarios` | Ninguno | Lista todos los usuarios. |
| `POST /api/usuarios` | Documento de usuario en JSON, de acuerdo con el esquema. | Crea y devuelve el usuario (`201`). |
| `GET /api/usuarios/:id` | ID del usuario en la ruta. | Devuelve el usuario; responde `404` si no existe. |
| `DELETE /api/usuarios/:id` | ID del usuario en la ruta. | Elimina el usuario y devuelve un mensaje de confirmación; responde `404` si no existe. |
| `GET /api/calificaciones` | Ninguno | Lista todas las calificaciones. |
| `GET /api/calificaciones/usuario/:usuario_id` | ID del usuario en la ruta. | Lista las calificaciones que coinciden con `usuario_id`. |
| `GET /api/calificaciones/pelicula/:pelicula_id` | ID de la película en la ruta. | Lista las calificaciones que coinciden con `pelicula_id`. |

Las solicitudes que reciben datos deben enviar `Content-Type: application/json`. Para probar creación y desactivación de películas se incluye `api/request.http`.
