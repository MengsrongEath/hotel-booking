-- Create database and use it
CREATE DATABASE users;
USE users;

-- Create users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50),
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    start_use TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (first_name, last_name, email, phone, password_hash) 
VALUES ('Seng', 'Buntheng', 'butheng@gmail.com', '+1234567890', 'hashed_password_here');

INSERT INTO users (first_name, last_name, email, phone, password_hash) 
VALUES ('Eath', 'Mengsrong', 'eathmengsrong@gmail.com', '+1234567890', 'hashed_password_here');