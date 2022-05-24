var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889
})

// Connexion
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

/*
con.query('SELECT * FROM', (err, rows) => {
    if (err) throw err;

    console.log('Résultat :');
    console.log(rows);
}); */