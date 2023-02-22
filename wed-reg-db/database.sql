CREATE DATABASE wedding;
use wedding;

CREATE TABLE attendees (
  invitationID int not null AUTO_INCREMENT,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  PRIMARY KEY (invitationID)
);

INSERT INTO attendees (invitationID, FirstName, LastName) 
VALUES ("John, Smith"), ("Jane, Smith");