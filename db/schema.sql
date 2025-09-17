DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS destinations;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username  TEXT NOT NULL,
    password  TEXT NOT NULL

);

CREATE TABLE destinations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL
    
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    destination_id INTEGER REFERENCES destinations(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);