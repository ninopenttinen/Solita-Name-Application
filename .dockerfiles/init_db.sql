CREATE TABLE IF NOT EXISTS names (
    name_id SERIAL PRIMARY KEY,
    name    VARCHAR(50),
    amount  INT
);

COPY names (name, amount)
FROM '/home/imports/names.csv' with (FORMAT CSV, DELIMITER ';', HEADER);