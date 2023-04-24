const { Console } = require('console');
const fs = require('fs');
const path = require('path');

//criar uma pasta
fs.mkdir(path.join(__dirname, 'test'), (error, _) => {
  if (error) {
    return console.log('Error: ', error);
  }

  console.log('Pasta criada com sucesso!');
});

// Criar um arquivo ou sobrescrever um arquivo existente
fs.writeFile(
  path.join(__dirname, '/test', 'test.txt'),
  'helo node!',
  (error) => {
    if (error) {
      return console.log('Error: ', error);
    }
    console.log('Arquivo criado com sucesso!');

    // Adicionar à um arquivo
    fs.appendFile(
      path.join(__dirname, '/test', 'test.txt'),
      'helo world!',
      (error) => {
        if (error) {
          return console.log('Error: ', error);
        }
        console.log('Arquivo modificado com sucesso!');
      }
    );

    //Ler arquivo
    fs.readFile(
      path.join(__dirname, '/test', 'test.txt'),
      'utf8',
      (error, data) => {
        if (error) {
          return console.log('Error: ', error);
        }
        console.log(data);
      }
    );
  }
);
