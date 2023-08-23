import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  swaggerDefinition: {
    restapi: "3.0.0",
    info: {
      title: "Smart List API",
      version: "1.0.0",
      description: "Smart List API",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["**/controllers/**/*.js"],
};

const specs = swaggerJsdoc(options);

const apiDocs = (app) => {
  console.log(specs);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default apiDocs;
