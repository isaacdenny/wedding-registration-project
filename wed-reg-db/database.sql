CREATE DATABASE if not exists wedding;
USE wedding;

CREATE TABLE if not exists attendants (
  id int NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  isAttending BOOLEAN DEFAULT FALSE,
  invitationID int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE if not exists users (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  isAdmin BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO attendants (firstName, lastName, isAttending, invitationID) VALUES ("John", "Smith", true, "0001"), ("Jane", "Smith", false, "0001");

INSERT INTO users (username, password, isAdmin) VALUES ("themaningrey", "insicknessandinhealth0219", true), ("thewomaninwhite", "insicknessandinhealth0430", true);