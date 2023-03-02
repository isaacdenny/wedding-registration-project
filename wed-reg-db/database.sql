CREATE DATABASE if not exists wedding;
USE wedding;

CREATE TABLE if not exists attendees (
  id int NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  isAttending BOOLEAN,
  invitationID int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO attendees (firstName, lastName, isAttending, invitationID) VALUES ("John", "Smith", true, "0001"), ("Jane", "Smith", false, "0001");