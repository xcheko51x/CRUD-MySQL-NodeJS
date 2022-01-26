const mysql = require('mysql');
const { insertarUsuario, leerUsuarios, editarUsuario, borrarUsuario } = require('./operaciones');

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database: 'pruebas',
        user:'root',
        password:''
    }
);

conexion.connect((error) => {
    if(error){
        console.error('Error en la conexion');
        return;
    }

    console.log('Conexion Exitosa');


});

// INSERTAR USUARIO

let usuario = [
    ['Luis R', '2878976', 'luisr@prueba.com']
];

//insertarUsuario(conexion, usuario);

// LEER USUARIOS

// EDITAR USUARIO
let idEditar = 4;
let editUsuario = 
    {
        nombre:'Jose Luis',
        telefono:'987656432',
        email:'joseluis@pruebas.com'
    };

//editarUsuario(conexion, idEditar,  editUsuario);

// BORRAR USUARIO

let idEliminar = 4;

borrarUsuario(conexion, idEliminar);


leerUsuarios(conexion);

conexion.end();