const mongoose = require('mongoose');

// const connectToDatabase = async () => {
//   await mongoose.connect(
//     `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.lncg9ob.mongodb.net/database?retryWrites=true&w=majority`,
//     (error) => {
//       if (error) {
//         return console.log(
//           'Ocorreu um erro ao se conectar ao Banco de dados: ',
//           error
//         );
//       }
//       return console.log('Conexão ao banco de dados realizada com sucesso');
//     }
//   );
// };

const connectToDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.lncg9ob.mongodb.net/database?retryWrites=true&w=majority`
    );
    console.log('Connected to Mongo Successfully!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDatabase;
