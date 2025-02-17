Primero detallemos que es el **Backend**:
# Backend (Parte del Servidor)
Es la lógica y gestión de datos que ocurre en el servidor. Se encarga de procesar solicitudes del frontend, gestionar bases de datos y garantizar la seguridad de la aplicación.
## Tecnologías principales:**
- **Lenguajes de programación:** C# (.NET), Java, Python, Node.js, PHP
- **Bases de datos:** PostgreSQL, MySQL, SQL Server, MongoDB
- **APIs y servicios web:** RESTful, GraphQL

Dicho esto podemos describir que para poder realizar dichas peticiones se utilizo el lenguaje de programacion **C#** que se usa para escribir la lógica del servidor. Tambien con su respectivo IDE que es **Visual Studio**.
# Conexion

En esta parte se describirá como se llevo a a cabo la tarea de conectar la base de datos y a la vez por medio de las *Clases* dentro de la **Biblioteca de clases** poder crear nuestras tablas con sus propiedades sin necesidad de crearlas dentro de un **Gestor de Bases de Datos (DBMS)** 

La herramienta es **[Entity Framework](Entity%20Framework.md)**, dicha herramienta esta disponible dentro del IDE de **Visual Studio** con la finalidad de hacer conexión con las siguientes base de datos: 
![![/#*Table2]]
| Base de datos | Proveedor de EF Core |
|----------|------|
|Microsoft SQL Server| `Microsoft.EntityFrameworkCore.SqlServer` |
|PostgreSQL|`Npgsql.EntityFrameworkCore.PostgreSQL`|
|MySQL / MariaDB|`Pomelo.EntityFrameworkCore.MySql` (MySQL) `MariaDB.EntityFrameworkCore` (MariaDB)|
|SQLite|`Microsoft.EntityFrameworkCore.Sqlite`|
|Oracle|`Oracle.EntityFrameworkCore`|
|IBM Db2|`IBM.EntityFrameworkCore`|
|Firebird|`FirebirdSql.EntityFrameworkCore.Firebird`|
|Cosmos DB (NoSQL)|`Microsoft.EntityFrameworkCore.Cosmos`|

La base de datos que se utilizo es **PostgreSQL** que nos permitira almacenar nuestros datos de manera sincrónica.
Para poder realizar la conexion se realizo la estructura que nos permitira tanto acceder y ejecutar las acciones necesarias que seran enviadas a la base de datos.
Entity Framework nos ofrece dicha conexion con la base de datos que se ha especificado pero para hacerlo el proyecto de Backend esta dividido 2 proyectos:
- [ASP.NET Core Web API](ASP.NET%20Core%20Web%20API.md) 
- [Biblioteca de clases](Biblioteca%20de%20clases.md)
Ambos estan dentro de un **Proyecto en Blanco** pero cada uno referenciado y esta denominado "**SolBackend-Community-Gest**"
pero porque en un **Proyecto en Blanco**:
1. **Mayor Control**: No tienes configuraciones predefinidas, lo que te permite personalizar la estructura desde cero.
2. **Separación de Responsabilidades**: Divides la API y la biblioteca de clases en módulos reutilizables.
3. **Evitar Código Innecesario**: No tienes archivos o configuraciones que no necesitas.
4. **Organización Limpia**: La API se enfoca solo en manejar solicitudes, mientras que la lógica y los modelos están en otro proyecto (`Data`).
Esto permite que la API use la base de datos sin definir modelos dentro del mismo proyecto. 🚀

Dicho esto se procederá a describir como se elaboro el proyecto a traves de las siguientes estructuras que se explico:
- [ASP.NET Core Web API](ASP.NET%20Core%20Web%20API.md): [Creacion de la API Web](Creacion%20de%20la%20API%20Web.md) 
- [Biblioteca de clases](Biblioteca%20de%20clases.md): [Creacion de la Biblioteca](Creacion%20de%20la%20Biblioteca.md)
