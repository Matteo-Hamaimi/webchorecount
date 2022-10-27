CREATE DATABASE ChoreCount;

\c ChoreCount;

-- create a table
CREATE TABLE Users(
   username VARCHAR(50),
   Firstname VARCHAR(50),
   Lastname VARCHAR(50),
   Password VARCHAR(50),
   PRIMARY KEY(username)
);

CREATE TABLE Chores(
   Id_Chores INT,
   Chore_Name VARCHAR(250),
   Description VARCHAR(350),
   username VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_Chores),
   FOREIGN KEY(username) REFERENCES Users(username)
);

