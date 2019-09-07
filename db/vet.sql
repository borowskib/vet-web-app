
CREATE TYPE rate AS ENUM ('1', '2', '3', '4');
CREATE TYPE gender AS ENUM('Samiec', 'Samica');

CREATE TABLE pen(
    idpen SERIAL PRIMARY KEY,
    group_name VARCHAR (10)
);

INSERT INTO pen (group_name) VALUES
    ('Kojec 1'),
    ('Kojec 2'),
    ('Kojec 3'),
    ('Kojec 4'),
    ('Kojec 5'),
    ('Kojec 6');

-- CREATE TABLE pig(
--     pen_id,
--     idpig,
--     rfid NUMERIC DEFAULT NULL,
--     gender gender NOT NULL,
--     FOREIGN KEY (pen_id) REFERENCES pen(idpen) ON DELETE CASCADE
-- )