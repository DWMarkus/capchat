const fs = require('fs')
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "capchat"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // CREATE DB
  con.query("CREATE DATABASE capchat", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  // CREATE TABLES
  var sql = "CREATE TABLE artistes ('id' INT NOT NULL AUTO_INCREMENT, 'name' VARCHAR(255), 'mdp' VARCHAR(255), PRIMARY KEY('id'))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table ARTISTES created");
  });

  var sql = "CREATE TABLE themes ('id' INT NOT NULL AUTO_INCREMENT, 'nom' VARCHAR(255), PRIMARY KEY('id'))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table THEMES created");
  });
  /*
  var sql = "CREATE TABLE images ('id' INT NOT NULL AUTO_INCREMENT, 'nom' VARCHAR(255), 'format' VARCHAR(255), PRIMARY KEY('id'))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table IMAGES created");
  });
  */
  var sql = "CREATE TABLE jeu_images ('id' INT NOT NULL AUTO_INCREMENT, 'nom' VARCHAR(255), 'theme_id' INT, 'artiste_id' INT, PRIMARY KEY('id', 'theme_id', 'artiste_id'))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table JEU_IMAGES created");
  });
});