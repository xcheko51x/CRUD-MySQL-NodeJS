function insertarUsuario(conexion, usuario){
    let query = `INSERT INTO usuarios(nombre, telefono, email) VALUES(?)`;

    conexion.query(query, usuario, (error) => {
        if(error){
            return console.error(error.message);
        }

        console.log(`Se inserto correctamente`);
    });
}

function leerUsuarios(conexion){
    conexion.query('SELECT * FROM usuarios;', (error, resultados, campos) => {
        if(error){
            return console.error(error.message);
        }
    
        resultados.forEach(resultado => {
            console.log(resultado);
        });
        
    });
}

function editarUsuario(conexion, id, usuario){

    let query = `UPDATE usuarios SET nombre='${usuario.nombre}', telefono='${usuario.telefono}', email='${usuario.email}' WHERE idUsuario=${id}`;

    conexion.query(query, usuario, (error) => {
        if(error){
            return console.error(error.message);
        }
        console.log(`Se actualizó el registro: ${id}`);
    });
}

function borrarUsuario(conexion, id){
    let query = `DELETE FROM usuarios WHERE idUsuario=${id}`;

    conexion.query(query, id, (error) => {
        if(error){
            return console.error(error.message);
        }

        console.log(`Se borro el registro: ${id}`);
    });
}

module.exports = {
    insertarUsuario,
    leerUsuarios,
    editarUsuario,
    borrarUsuario
}