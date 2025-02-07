-- Database: CommunityGestDB

-- DROP DATABASE IF EXISTS "CommunityGestDB";

INSERT INTO "Usuarios" ("Cedula", "Nombre", "Apellido", "Correo", "Telefono","Estado")
VALUES ('0102030405', 'Juan', 'Perez', 'juanperez@mail.com', '0987654321',TRUE),
       ('0102030406', 'Maria', 'Lopez', 'marialopez@mail.com', '0987654322',TRUE);

INSERT INTO "Herramientas" ("Nombre", "Ubicacion", "Descripcion", "Cantidad","Estado")
VALUES ('Martillo', 'Bodega 1', 'Martillo de construccion', 10, TRUE),
       ('Destornillador', 'Bodega 2', 'Destornillador Phillips', 5, TRUE);

INSERT INTO "Instalaciones" ("Nombre", "Tipo", "Capacidad", "Descripcion", "Dia", "Hora_Inicio", "Hora_Fin", "Estado")
VALUES ('Auditorio', 'Conferencia', 50, 'Auditorio para eventos y conferencias', 'Lunes', '08:00', '12:00', TRUE),
       ('Sala de reuniones', 'Reunion', 10, 'Sala de reuniones para equipos pequenos', 'Martes', '10:00', '14:00', TRUE);

INSERT INTO "Reportes"("Titulo", "Descripcion", "Recurso_Afectado", "Estado")
VALUES ('Problema con martillo', 'El martillo esta danado', 'Martillo', TRUE),
       ('Falta de sillas en auditorio', 'El auditorio no tiene suficientes sillas', 'Auditorio', TRUE);

INSERT INTO "Reserva_Herramientas"("Usuario_ID", "Herramienta_ID","Dia", "Fecha", "Hora_Inicio", "Hora_Fin", "Disponibilidad")
VALUES 
    (1, 1, 'Lunes', '2025-01-21','08:00', '10:00', 'R'),
    (2, 2, 'Martes', '2025-01-22','10:00', '12:00', 'R');
	
INSERT INTO "Reserva_Instalaciones"("Usuario_ID", "Instalacion_ID", "Fecha", "Disponibilidad")
VALUES (1, 1, '2025-01-21', 'R'),
       (2, 2, '2025-01-22', 'R');
	
select * from "Instalaciones"
select * from "Reportes"
SELECT * FROM "Herramientas"
SELECT * from "Reserva_Herramientas"
SELECT * FROM "Reserva_Instalaciones"
SELECT * from "Usuarios"