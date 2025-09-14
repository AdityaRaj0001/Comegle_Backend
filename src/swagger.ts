const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Comegle API",
    version: "1.0.0",
  },
  paths: {
    "/colleges": {
      get: {
        summary: "Get all colleges",
        responses: {
          "200": {
            description: "A list of colleges",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/College" },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      College: {
        type: "object",
        properties: {
          id: { type: "integer" },
          name: { type: "string" },
          emailDomain: { type: "string" },
          lat: { type: "number" },
          lng: { type: "number" },
        },
      },
    },
  },
};
export default swaggerDocument;
