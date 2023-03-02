CREATE DATABASE if not exists wedding;
USE wedding;

CREATE TABLE if not exists attendees (
  id int NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  invitationID int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO attendees (firstName, lastName, invitationID) VALUES ("John", "Smith", "0001"), ("Jane", "Smith", "0001");