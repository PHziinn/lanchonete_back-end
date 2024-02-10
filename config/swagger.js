import swaggerAutogen from 'swagger-autogen';


const doc = {
  info: {
    version: '1.0.0',
    title: 'API Lanchonete',
    description: 'API REST Lanchonete'
  },
  host: '',                          // by default: 'localhost:3000'
  basePath: '',                      // by default: '/'
  schemes: ['http', 'https'],        // by default: ['http']

  securityDefinitions: {
    AccessToken: {
      type: 'apiKey',
      in: 'header',
      name: 'authorization',
    },
  },
  security: [
    {
      AccessToken: []
    }
  ]
};

const outputFile = './swagger-output.json';
const routes = ['./src/router/routes.js'];

swaggerAutogen()(outputFile, routes, doc);



