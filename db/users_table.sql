CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    user_auth_id TEXT,
    user_picture TEXT,
    user_email TEXT
);