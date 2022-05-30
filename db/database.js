const fs = require('fs')
const { Sequelize } = require('sequelize')

// Connexion
const sequelize = new Sequelize("capchat", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("CREATE DATABASE `capchat`;").then(([results, metadata]) => {
        console.log('Base de données créée !');
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }