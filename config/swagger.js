import swaggerAutogen from 'swagger-autogen';


const doc = {
  info: {
    title: 'API Lanchonete',
    description: 'Description'
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const routes = ['./src/router/routes.js', './src/router/pratosRoutes.js', './src/router/pedidosRoutes.js'];



swaggerAutogen()(outputFile, routes, doc);

