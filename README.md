# Prueba desarrollador
Creación del backend con Framework Express

  "dependencies": {
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mysql2": "^3.2.0",
    "sequelize": "^6.29.1"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/jsonwebtoken": "^9.0.1",
    "nodemon": "^2.0.21",
    "typescript": "^4.9.5"
  }
  
*Instalación de paquetes y configuraciónes iniciales.*
----------------------------------------------------------
Se instalaron dependencias express, bcrypt, cors, dotenv, jsonwebtoken, sequelize, mysql2. 

Dependencia de desarrollo: Typescript, nodemon, 

instalación del package
@types/express
@types/bcrypt
@types/jsonwebtoken

*Scripts: *
-------------------
Agrego en package.json: 

"dev": "nodemon dist/index.js" (npm run dev)
"typescript": "tsc --watch" (npm run typescript)


*Estructura de carpetas*
---------------------------
Creación de carpetas: Controllers, db, models, y routes.

models: creación de archivo server.ts. Se creó para correr dentro el puerto 3001

*Configuración de rutas*
-------------------------
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

Se hizo creación de modelos y obtención de tablas desde ORM de sequelize. 

*Validación login*
--------------------
Creación de usuarios en bd.
User: solo acepta valores unicos

Creando una password
$2b$10$jStguy9E.e6RfXLVjfvNmeHYfKwhypX88OOaiF5Wg9HUPhMCpdbL

Verificación que no haya usuarios duplicados


Validación de usuario en la base de datos.
validación de password 
*JWT*
----------
JWT - Creación del token
Protección de rutas: Se hizo protección de rutas y se implementó jwt para generar token y que tengan su verficiación si es valido o no.
Se creó crud con con ayuda de ORM de Sequelize y se crearon sus respectivas rutas.
