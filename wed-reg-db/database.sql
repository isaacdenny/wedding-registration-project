CREATE DATABASE if not exists wedding;
USE wedding;

CREATE TABLE if not exists attendees (
  InvitationID int NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(100) NOT NULL,
  LastName VARCHAR(100) NOT NULL,
  PRIMARY KEY (InvitationID)
);

INSERT INTO attendees (FirstName, LastName) VALUES ("John", "Smith"), ("Jane", "Smith");