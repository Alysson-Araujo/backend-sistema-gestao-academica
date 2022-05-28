const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routers/AlunoRouters.ts'];

swaggerAutogen(outputFile, endpointsFiles);
