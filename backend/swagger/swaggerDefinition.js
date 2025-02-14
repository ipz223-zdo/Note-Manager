// backend/swagger/swaggerDefinition.js

const swaggerJsDoc = require("swagger-jsdoc");

// Налаштування Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Notes API",
            version: "1.0.0",
            description: "API для управління нотатками",
        },
    },
    apis: ['./server.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
