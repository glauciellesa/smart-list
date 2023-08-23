const createUser = {
  tags: ["Users"],
  description: "Create a new use in the system",
  operationId: "createUser",
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          /*        $ref: "#/components/schemas/createUserBody", */
          $ref: "#/models/userModel",
        },
      },
    },
    required: true,
  },
  responses: {
    201: {
      description: "User created successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                example: "60564fcb544047cdc3844818",
              },
              first_Name: {
                type: "string",
                example: "John",
              },
              last_Name: {
                type: "string",
                example: "Snow",
              },
              picture: {
                type: "string",
                example:
                  "https://avatars.githubusercontent.com/u/65506911?s=96&v=4",
              },
              email: {
                type: "string",
                example: "john.snow@email.com",
              },
              password: {
                type: "string",
                example: "442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
  400: {
    description: "Bad Request",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Registration failed",
            },
          },
        },
      },
    },
  },
};

const createUserBody = {
  type: "object",
  properties: {
    fullName: {
      type: "string",
      example: "John Snow",
    },
    email: {
      type: "string",
      example: "john.snow@email.com",
    },
    password: {
      type: "string",
      description: "unencrypted user's password",
      example: "!1234aWe1Ro3$#",
    },
    enabled: {
      type: "boolean",
      example: true,
    },
    role: {
      type: "string",
      example: "605636683f6e29c81c8b2db0",
    },
  },
};

export { createUser, createUserBody };
