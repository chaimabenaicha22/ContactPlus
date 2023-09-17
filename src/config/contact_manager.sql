/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.4.25-MariaDB 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `contacts` (
	`id` int (11),
	`firstName` varchar (765),
	`lastName` varchar (765),
	`email` varchar (765),
	`address` varchar (765),
	`phone` varchar (60),
	`age` int (11)
); 
insert into `contacts` (`id`, `firstName`, `lastName`, `email`, `address`, `phone`, `age`) values('20','chaima','ben aicha','chaimabenaicha22@gmail.com','4 mail martin luther king bezons','0749744207','26');
insert into `contacts` (`id`, `firstName`, `lastName`, `email`, `address`, `phone`, `age`) values('21','John','Doe','johndoe@email.com','123 Main Street','0749744209','25');
insert into `contacts` (`id`, `firstName`, `lastName`, `email`, `address`, `phone`, `age`) values('22','Jane','Smith','janesmith@email.com','456 Elm Street','0749744205','23');
