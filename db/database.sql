CREATE DATABASE if not exists wedding;
USE wedding;

CREATE TABLE if not exists attendants (
  uuid int AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  partyName VARCHAR(100) NOT NULL,
  invitationID int NOT NULL,
  isAttending BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (uuid)
);

CREATE TABLE if not exists users (
  uuid int AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (uuid)
);

INSERT INTO users (username, password) VALUES ("themaningrey", "insicknessandinhealth0219"), ("thewomaninwhite", "insicknessandinhealth0430");