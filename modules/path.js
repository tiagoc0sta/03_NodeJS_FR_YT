const path = require('path');

//Basename - apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretorio atual
console.log(path.dirname(__dirname));

// Extensao do arquivo at
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));
