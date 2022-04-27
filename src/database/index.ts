import bd from 'mongoose';
require('dotenv').config();

/**Nesse projeto básico, será feito com o banco de dados
 * mongodb. Porém, os dados serão armazenados em ROM e conectada no localhost.
 * Uma dica de leitura: https://pt.stackoverflow.com/questions/299234/erro-de-the-usemongoclient-option-is-no-longer-necessary-in-mongoose-5-x-plea
 */


bd.Promise = global.Promise;
bd.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9rsdi.mongodb.net/sistema-academico?retryWrites=true&w=majority`);

//mongoose.connect('mongodb://localhost/node-bd-academico');

export default bd;