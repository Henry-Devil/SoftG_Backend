# SoftG_Backend
Creación del backend con Framework Express


Instalación de paquetes y configuraciónes iniciales.

Se instalaron dependencias express, bcrypt, cors, dotenv, jsonwebtoken, sequelize, mysql2. 

Dependencia de desarrollo: Typescript, nodemon, 

instalación del package
@types/express
@types/bcrypt
@types/jsonwebtoken

Scripts: 

Agrego en package.json: 

"dev": "nodemon dist/index.js" (npm run dev)
"typescript": "tsc --watch" (npm run typescript)


Estructura de carpetas

Creación de carpetas: Controllers, db, models, y routes.

models: creación de archivo server.ts. Se creó para correr dentro el puerto 3001

Configuración de rutas

(GET)
http://localhost:3001/api/drivers
http://localhost:3001/api/vehicles
http://localhost:3001/api/routes
http://localhost:3001/api/schedules

(POST)

http://localhost:3001/api/users (Agregamos usuario)
http://localhost:3001/api/login (Login usuario)

Se crearon todas la tablas requeridas con sus respectivas conexiones
Dentro de controller, models, routes

Se hizo creación de modelos y obtención de Tabla Drivers desde ORM de sequelize. 

Creación de usuarios en bd.
User: solo acepta valores unicos

Creando una password
$2b$10$jStguy9E.e6RfXLVjfvNmeHYfKwhypX88OOaiF5Wg9HUPhMCpdbL

Verificación que no haya usuarios duplicados


Validación de usuario en la base de datos.
validación de password 
JWT - Creación del token
Protección de rutas: Se hizo protección de rutas y se implementó jwt para generar token y que tengan su verficiación si es valido o no.
Se creó crud con con ayuda de ORM de Sequelize y se crearon sus respectivas rutas.
