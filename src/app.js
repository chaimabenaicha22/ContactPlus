const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const app = express();
const router = require('./routes/contact');
require('dotenv').config();

app.use(bodyParser.json());

app.use(cors());

app.use(router);

// Définir les routes pour les opérations CRUD (Create, Read, Update, Delete) des contacts ici

app.listen(process.env.NODE_PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${process.env.NODE_PORT}`);
});


