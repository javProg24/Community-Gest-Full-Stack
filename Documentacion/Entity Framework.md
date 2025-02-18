# Entity Framework
Es un **ORM (Object-Relational Mapper)** para .NET que facilita la interacción con bases de datos mediante código en C#. Permite trabajar con datos como si fueran objetos de C# en lugar de escribir consultas SQL directamente.
## **Características principales de Entity Framework**

1. **Mapeo de objetos a base de datos** 🗄️➡️🧩  
    Convierte clases C# (`Models`) en tablas de bases de datos y viceversa.
    
2. **Consultas con LINQ** 🔍  
    Permite escribir consultas con **LINQ** en lugar de SQL:
```c#
var usuarios = _context.Usuarios.Where(u => u.Estado == true).ToList();
```

3. **Manejo automático de datos** ⚡
	- Inserción (`Add`), actualización (`Update`), eliminación (`Remove`).
	- Control de cambios en objetos (`ChangeTracker`).
	
4. **Migraciones y generación automática de bases de datos** 🔄
    - Permite crear y actualizar la estructura de la base de datos sin necesidad de escribir SQL (`Add-Migration` y `Update-Database` en la Consola de Administrador de Paquetes).

## Compatibilidad
La herramienta es **[Entity Framework](Entity%20Framework.md)**, dicha herramienta esta disponible dentro del IDE de **Visual Studio** con la finalidad de hacer conexión con las siguientes base de datos:

| Base de datos        | Proveedor de EF Core                                                               |
| -------------------- | ---------------------------------------------------------------------------------- |
| Microsoft SQL Server | `Microsoft.EntityFrameworkCore.SqlServer`                                          |
| PostgreSQL           | `Npgsql.EntityFrameworkCore.PostgreSQL`                                            |
| MySQL / MariaDB      | `Pomelo.EntityFrameworkCore.MySql` (MySQL) `MariaDB.EntityFrameworkCore` (MariaDB) |
| SQLite               | `Microsoft.EntityFrameworkCore.Sqlite`                                             |
| Oracle               | `Oracle.EntityFrameworkCore`                                                       |
| IBM Db2              | `IBM.EntityFrameworkCore`                                                          |
| Firebird             | `FirebirdSql.EntityFrameworkCore.Firebird`                                         |
| Cosmos DB (NoSQL)    | `Microsoft.EntityFrameworkCore.Cosmos`                                             |
**Entity Framework** puede ser usado por:
1️⃣ **✅ [ASP.NET Core Web API](ASP.NET%20Core%20Web%20API)**
- Para interactuar con bases de datos en aplicaciones web.
- 📌 **Ejemplo**: API para un sistema de gestión de usuarios.

2️⃣ **✅ Aplicaciones de Consola (.NET Core o .NET Framework)**
- Se puede usar EF en aplicaciones de línea de comandos.
- 📌 **Ejemplo**: Un script de migraciones de base de datos.

3️⃣ **✅ Aplicaciones de Escritorio (Windows Forms / WPF / MAUI)**
- Permite manejar bases de datos en interfaces gráficas.
- 📌 **Ejemplo**: Un sistema de gestión de inventario en Windows Forms.

4️⃣ **✅ Servicios en Segundo Plano (Background Services, Windows Services, Azure Functions, etc.)**
- Permite acceder a bases de datos sin una API web.
- 📌 **Ejemplo**: Un servicio que limpia registros antiguos en la base de datos automáticamente.