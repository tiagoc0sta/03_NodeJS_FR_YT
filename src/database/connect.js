const mongoose = require('mongoose');

const connectToDatabase = async (db) => {
  await mongoose.connect(
    'mongodb+srv://tiagoc0sta:<password>@cursonodejsdicasparadev.lncg9ob.mongodb.net/?retryWrites=true&w=majority',
    (error) => {
      if (error) {
        return console.log(
          'Ocorreu um erro ao se conectar ao Banco de dados: ',
          error
        );
      }
      return console.log('Conexão ao banco de dados realizada com sucesso');
    }
  );
};
