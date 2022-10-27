CREATE DATABASE ChoreCount;

\c ChoreCount;

-- create a table
CREATE TABLE Users(
   username VARCHAR(50) not null,
   Firstname VARCHAR(50) not null,
   Lastname VARCHAR(50) not null,
   Pword VARCHAR(50) not null,
   PRIMARY KEY(username)
);

CREATE TABLE Chores(
   Id_Chores INT,
   Chore_Name VARCHAR(250),
   Descr VARCHAR(350),
   username VARCHAR(50) NOT NULL,
   room_name VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_Chores),
   FOREIGN KEY(username) REFERENCES Users(username)
);

