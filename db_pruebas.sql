create database pruebas;

use pruebas;

create table usuarios(
	idUsuario int primary key auto_increment,
	usuario varchar(50) not null,
	contrasena varchar(15) not null,
	email varchar(50)
);

insert into usuarios values("", "Sergio P", "sergiop1234", "sergio@prueba.com");
insert into usuarios values("", "Laura L", "laural9u8658", "laura@prueba.com");
insert into usuarios values("", "Andrea X", "andreax4325", "andrea@prueba.com");
