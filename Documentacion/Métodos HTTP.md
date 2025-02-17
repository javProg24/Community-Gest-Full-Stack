Los métodos HTTP definen las operaciones que se pueden realizar sobre los recursos. Los más comunes son:
- `GET`
- `POST`
- `PUT`
- `DELETE`
Estos servicios permiten a diferentes aplicaciones intercambiar información de forma **rápida, escalable y segura**.
Estos metodos estan basados en el **Lenguaje de Manipulación de Datos (DML)**:
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

Se encarga de recibir **solicitudes HTTP (GET, POST, PUT, DELETE)** y responder con **datos en JSON**.  