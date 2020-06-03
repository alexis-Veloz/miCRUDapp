const express = require('express');
//const router = express.Router();
const router = require('express').Router();
const dbConnection = require('../config/dbConnection.js');
const app = express();
const connection = dbConnection();





router.get('/', function(req, res) {  

    // Running database queries
    connection.query('SELECT * FROM video', function(err, rows, fields) {
        if (!err) {

            res.render('index.html', {
                title: 'Videos de Youtube',
                datos: rows // this will work!!!
            });
        }
        if (err) {
            console.log('Error performing database query.');
        }
    });
});


router.post('/add', function(req, res){
    var data = req.body;
    connection.query('insert into usuario values(null,"'+data.nombre+'","'+data.pass+'","'+data.email+'")', function(err, rows, fields) {
        if (!err) {
        	console.log(data);
            res.send('Usuario registrado con exito');
        }
        if (err) {
            console.log('Error performing database query.');
        }
    });
    
});


router.get('/',(req,res) => {
	res.render('index.html',{title: 'Sesion'});
});

router.get('/registro',(req,res) => {
	res.render('registro.html',{title: 'Contact Page'});
});








module.exports = router;