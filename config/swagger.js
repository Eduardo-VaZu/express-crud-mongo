import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Books API",
      version: "1.0.0",
      description: "API de librería documentada con Swagger",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Servidor de Desarrollo",
      },
    ],
  },
  // Esta ruta es clave: le dice a Swagger dónde leer los comentarios de tus rutas
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
