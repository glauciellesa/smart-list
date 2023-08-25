import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { createUser, createUserBody } from "./users.js";

const options = {
  swaggerDefinition: {
    restapi: "3.0.0",
    info: {
      title: "Smart List API",
      version: "1.0.0",
      description: "Smart List API",
      contact: {
        name: "Glaucielle Sá",
        email: "dev@example.com",
        url: "https://smart-list-client.vercel.app/",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "Local Server",
      },
      {
        url: "https://smart-list-server.vercel.app/",
        description: "Production Server",
      },
    ],
  },
  tags: [
    {
      name: "Users",
    },
    {
      name: "Products",
    },
    {
      name: "Shopping List",
    },
    {
      name: "Recipes",
    },
  ],
  apis: ["**/controllers/**/*.js"],
  paths: {
    users: {
      post: createUser,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      createUserBody,
    },
  },
};

const specs = swaggerJsdoc(options);

const apiDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default apiDocs;
