using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class MigracionInicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Herramientas",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Ubicacion = table.Column<string>(type: "text", nullable: false),
                    Descripcion = table.Column<string>(type: "text", nullable: false),
                    Cantidad = table.Column<int>(type: "integer", nullable: false),
                    Estado = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Herramientas", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Instalaciones",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Tipo = table.Column<string>(type: "text", nullable: false),
                    Capacidad = table.Column<int>(type: "integer", nullable: false),
                    Descripcion = table.Column<string>(type: "text", nullable: false),
                    Dia = table.Column<string>(type: "text", nullable: false),
                    Hora_Inicio = table.Column<TimeSpan>(type: "interval", nullable: false),
                    Hora_Fin = table.Column<TimeSpan>(type: "interval", nullable: false),
                    Estado = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Instalaciones", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Reportes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Titulo = table.Column<string>(type: "text", nullable: false),
                    Descripcion = table.Column<string>(type: "text", nullable: false),
                    Recurso_Afectado = table.Column<string>(type: "text", nullable: false),
                    Estado = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reportes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Cedula = table.Column<int>(type: "integer", nullable: false),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Apellido = table.Column<string>(type: "text", nullable: false),
                    Correo = table.Column<string>(type: "text", nullable: false),
                    Telefono = table.Column<int>(type: "integer", nullable: false),
                    Estado = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Reserva_Herramientas",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Usuario_ID = table.Column<int>(type: "integer", nullable: false),
                    Herramienta_ID = table.Column<int>(type: "integer", nullable: false),
                    Dia = table.Column<string>(type: "text", nullable: false),
                    Fecha = table.Column<DateOnly>(type: "date", nullable: true),
                    Hora_Inicio = table.Column<TimeSpan>(type: "interval", nullable: false),
                    Hora_Fin = table.Column<TimeSpan>(type: "interval", nullable: false),
                    Disponibilidad = table.Column<char>(type: "character(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reserva_Herramientas", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Reserva_Herramientas_Herramientas_Herramienta_ID",
                        column: x => x.Herramienta_ID,
                        principalTable: "Herramientas",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reserva_Herramientas_Usuarios_Usuario_ID",
                        column: x => x.Usuario_ID,
                        principalTable: "Usuarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Reserva_Instalaciones",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Usuario_ID = table.Column<int>(type: "integer", nullable: false),
                    Instalacion_ID = table.Column<int>(type: "integer", nullable: false),
                    Fecha = table.Column<DateOnly>(type: "date", nullable: true),
                    Disponibilidad = table.Column<char>(type: "character(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reserva_Instalaciones", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Reserva_Instalaciones_Instalaciones_Instalacion_ID",
                        column: x => x.Instalacion_ID,
                        principalTable: "Instalaciones",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reserva_Instalaciones_Usuarios_Usuario_ID",
                        column: x => x.Usuario_ID,
                        principalTable: "Usuarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reserva_Herramientas_Herramienta_ID",
                table: "Reserva_Herramientas",
                column: "Herramienta_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Reserva_Herramientas_Usuario_ID",
                table: "Reserva_Herramientas",
                column: "Usuario_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Reserva_Instalaciones_Instalacion_ID",
                table: "Reserva_Instalaciones",
                column: "Instalacion_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Reserva_Instalaciones_Usuario_ID",
                table: "Reserva_Instalaciones",
                column: "Usuario_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reportes");

            migrationBuilder.DropTable(
                name: "Reserva_Herramientas");

            migrationBuilder.DropTable(
                name: "Reserva_Instalaciones");

            migrationBuilder.DropTable(
                name: "Herramientas");

            migrationBuilder.DropTable(
                name: "Instalaciones");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
