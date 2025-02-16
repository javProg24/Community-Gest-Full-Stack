Primero detallemos que es una API Web en .NET, es un servicio que permite la comunicación entre aplicaciones a traves de internet o una red interna, utilizando protocolos de HTTP. Se basa en ASP.NET Core Web API, un framework .NET para construir servicios RESTfull.

Los servicios REST son APIs basadas en el estilo arquitectónico REST **(Representational State Transfer)**. REST define un conjunto de reglas para la comunicación entre sistemas a través del **protocolo HTTP**.

Estos servicios permiten a diferentes aplicaciones intercambiar información de forma **rápida, escalable y segura**, utilizando **métodos HTTP** como `GET`, `POST`, `PUT`, y `DELETE`. Estos metodos estan basados en el **Lenguaje de Manipulación de Datos (DML)**:
- `INSERT`
- `UPDATE`
- `DELETE`
- `GET`
Que son específicamente comandos SQL que nos permitira gestionar datos en bases de datos relacionales,

Ambos casos corresponden al mismo concepto:
|Metodos HTTP|DML|Relación|
|----------------|------|----------|
|`POST`|`INSERT`|Agrega un nuevo registro en la base de datos|
|`PUT`|`UPDATE`|Modifica registros existentes|
|`DELETE`|`DELETE`|Elimina registros de la base de datos|
|`GET`|`GET`|Consulta datos sin modificarlos|

Es por eso que podemos acceder fácilmente a la base de datos sin ejecutar los comandos DML de SQL con esta cuestión y gracias **[EF](obsidian://open?vault=Documentacion&file=Entity%20Framework)** podemos manipular los datos de la base a traves de objetos siempre y cuando tengamos la cadena de conexión.

La **cadena de conexión** es un conjunto de información que permite a la aplicación conectarse a una base de datos. Esta cadena contiene detalles como el tipo de base de datos, el servidor, las credenciales de acceso y la base de datos específica a la que se desea acceder.
Tambien tenemos que otorgarle permisos para poder acceder a la base de datos.

Esta cadena se puede digitar dentro de una **API Web**, con eso podemos crear la tabla y sus propiedades pero primero tenemos que crear la **API** dentro de nuestro **IDE** de **Visual Studio**.




