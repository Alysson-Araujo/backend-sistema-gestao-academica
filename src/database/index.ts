import mongoose from 'mongoose';

/**Nesse projeto básico, será feito com o banco de dados
 * mongodb. Porém, os dados serão armazenados em ROM e conectada no localhost.
 * Uma dica de leitura: https://pt.stackoverflow.com/questions/299234/erro-de-the-usemongoclient-option-is-no-longer-necessary-in-mongoose-5-x-plea
 */

mongoose.connect('mongodb://localhost/node-bd-academico');
mongoose.Promise = global.Promise;

module.exports(mongoose);
