const express = require('express');

const Router = require('./routers/account.js');
const requestLogger = require('./middleware/request-logger.js');
const accessController = require('./middleware/accessController');
const errorHandler = require('./middleware/error-handler.js');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json')

const app = express();

// app.use(requestLogger);
// app.use(
//   express.static('dist', {
//     setHeaders: (res, path, stat) => {
//       res.set('Cache-Control', 'public, s-maxage=86400');
//     },
//   })
// );


app.use(accessController);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/', Router);
app.get('/*', (req, res) => res.send("server"));
app.use(errorHandler);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
