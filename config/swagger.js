import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const routes = ['./src/router/routes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// swaggerAutogen()(outputFile, routes, doc).then(async () => {
//   await import('../server.js'); // Your project's root file
// });

swaggerAutogen()(outputFile, routes, doc);

