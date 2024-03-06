DROP DATABASE IF EXISTS `leandroheffesdatabase`;
CREATE DATABASE `leandroheffesdatabase`;
USE `leandroheffesdatabase`;

create table `proyects` (
	`id` varchar(96) not null,
	`name` varchar(96) not null,
	`image` varchar(96) not null,
	`proyect_link` varchar(512),
	`github_link` varchar(512),
	primary key (`id`)
);

create table `users` (
	`id` varchar(96) not null,
	`email` varchar(96) not null,
	`password` varchar(96) not null,
	primary key (`id`)
);

insert into `users` values ('1', 'leandroheffes@outlook.es', '$2a$10$J50y7L3SVAhXwJV8SRst2eE.CLYiu36ByqbHRIEgzWNZUMfnouDJm');