const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();
app.use(express.json());

//buscar users
app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Criar user
app.post('/users', async (req, res) => {
  try {
    const user = UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//buscar user por ID
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//alterar apenas um ou mais dados do usuario - sem alterar o usuario totalmente
app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//deletar usuario
app.delete('/users/:id', async function (req, res) {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));
