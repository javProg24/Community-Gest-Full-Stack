Para poder ejecutar nuestra API Web primero hay que describir su creacion. Para poder crearla dentro de nuestro **Proyecto en Blanco** primero hay que crearla con las siguientes opciones dentro del IDE de **Visual Studio**:
- Seleccionar proyecto en Blanco: **SolBackend-Community-Gest**
- Clic derecho y buscar la opcion **Agregar**>**Nuevo Proyecto**>[ASP.NET Core Web API](ASP.NET%20Core%20Web%20API.md)
- Digitar el nombre y se le ha denominado "**API-Community**"

Con esto se ha creado nuestra API con los [controladores](Controladores.md), [metodos HTTP](Métodos%20HTTP.md) y [Swagger](Swagger.md). 
Luego de esto se debe establecer las siguientes extensiones o paquetes que nos permitira trabajar con nuestra API:
- `Microsoft.EntityFrameworkCore.Design`
- `Microsoft.EntityFrameworkCore.Tools`
- `Microsoft.VisualStudio.Web.CodeGeneration.Design`
- `Swashbuckle.AspNetCore` (esta viene por defecto)

Luego establecer la cadena de conexion dentro de nuestra API y esto se lo hara en el archivo **`appsettings.json`**:
```json
"AllowedHosts": "*",
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=CommunityGestDB;Username=postgres;Password=2001;"
}
```

Cabe destacar que la base de datos se denomina "**CommunityGestDB**" y tambien permitirles acceder a la base de datos a traves del 'Password'.

>La **cadena de conexión** es un conjunto de información que permite a la aplicación conectarse a una base de datos. Esta cadena contiene detalles como el tipo de base de datos, el servidor, las credenciales de acceso y la base de datos específica a la que se desea acceder. Tambien tenemos que otorgarle permisos para poder acceder a la base de datos.

>Esta cadena se puede digitar dentro de una **API Web**, con eso podemos crear la tabla y sus propiedades pero primero tenemos que crear la **API** dentro de nuestro **IDE** de **Visual Studio**.

Luego de esto tenemos que hacer que el proyecto "**ASP.NET Core Web API**" este referenciado con las clases que nos permitira crear nuestras tablas y esto se hara a traves de la **Biblioteca de clases** denominada "**[Data](Creacion%20de%20la%20Biblioteca.md)**" 

