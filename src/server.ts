import express from 'express';
import parser from 'body-parser';
import router from './routers/index';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from 'swagger_output.json';
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/usuario', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log('teste de conexão na porta 3000');
});
