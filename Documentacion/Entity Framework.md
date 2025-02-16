Entity Framework (EF) es un **ORM (Object-Relational Mapper)** para .NET que facilita la interacción con bases de datos mediante código en C#. Permite trabajar con datos como si fueran objetos de C# en lugar de escribir consultas SQL directamente.
### **Características principales de Entity Framework**

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

