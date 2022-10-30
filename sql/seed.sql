-- insert value
INSERT INTO users(username, Firstname, Lastname, Pword) VALUES ('emerick_944', 'Emerick', 'Szonyi', '94400');
INSERT INTO users(username, Firstname, Lastname, Pword) VALUES ('danny-grn', 'Danny', 'Graine', '94400');

INSERT INTO Chores(Id_Chores, Chore_Name, Descr, username, room_name)VALUES (1, 'Clean the dishes', 'Clean the dishes', 'emerick_944','Kitchen');
INSERT INTO Chores(Id_Chores, Chore_Name, Descr, username, room_name)VALUES (2, 'Talk about JB', 'Say smt about JB', 'danny-grn', 'Living Room');