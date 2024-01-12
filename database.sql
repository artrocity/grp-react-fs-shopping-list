-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Creating the Table
CREATE TABLE shopping (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" REAL NOT NULL,
	"unit" VARCHAR(20),
	"purchased" BOOLEAN	
);

-- Insert Items Into the table
INSERT INTO shopping ("name", "quantity", "unit", "purchased")
VALUES 
('Eggs', 1, 'Dozen', false),
('Bread', 1, 'Pound', false),
('Beans', 1, 'Can', false);

-- Insert floating point number into the table
INSERT INTO shopping ("name", "quantity", "unit", "purchased")
VALUES 
('Ham', 1.75, 'lbs', false);