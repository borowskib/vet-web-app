CREATE TYPE ZERO_TO_THREE_RATE AS ENUM ('0', '1', '2', '3');
CREATE TYPE ZERO_TO_TWO_RATE AS ENUM ('0', '1', '2');

CREATE TYPE GENDER AS ENUM('Samiec', 'Samica');

---------------- ŚRODOWISKO ------------------
CREATE TABLE global_measures(
    global_measure_id SERIAL PRIMARY KEY,
    global_measure_date DATE NOT NULL,
    global_measure_time TIME NOT NULL,
    global_nh_three SMALLINT NOT NULL,
    global_h_two_s SMALLINT NOT NULL,
    global_co_two SMALLINT NOT NULL,
    global_temperature SMALLINT NOT NULL,
    global_wetness INTEGER NOT NULL
);

INSERT INTO global_measures VALUES (1, '2019-09-17', '18:30:00', 4, 3, 2, 23, 55);

---------------- KOJEC --------------------
CREATE TABLE pen(
    pen_id SERIAL PRIMARY KEY,
    pen_area_size FLOAT(3) NOT NULL
);

INSERT INTO pen VALUES (1, 8.56);

---------------- POMIAR --------------------
CREATE TABLE pen_measures(
    id_pen INTEGER NOT NULL,
    pen_measure_date DATE NOT NULL,
    pen_measure_time TIME NOT NULL,
    pen_breakdown CHAR(255) DEFAULT NULL,
    pen_dosatron SMALLINT DEFAULT NULL,
    pen_dosatron_addition CHAR(255) DEFAULT NULL,
    pen_forage INTEGER NOT NULL,
    pen_forage_qty_used FLOAT(5) DEFAULT NULL,
    pen_water SMALLINT NOT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) -- ON DELETE CASCADE
);

INSERT INTO pen_measures VALUES (1, '2019-09-17', '19:00:00', 'Uszkodzone poidlo', NULL, NULL, 1, 14.9, 45);

----------------- PASZA --------------------
CREATE TABLE forage(
    id_pen INTEGER NOT NULL,
    forage_about CHAR(255) DEFAULT NULL,
    forage_qty FLOAT(10) NOT NULL,
    forage_price FLOAT(5) NOT NULL,
    forage_creation_date DATE NOT NULL,
    forage_producer CHAR(255) NOT NULL,
    forage_expiration_date DATE NOT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) -- ON DELETE CASCADE
);

INSERT INTO forage VALUES (1, 'Pasza dedykowana trzodzie chlewnej z dodatkiem witamin i mineralow', 1000, 4.5, '2019-01-01', 'Pasnik', '2020-11-01');

----------------- ŚWINIE ------------------
CREATE TABLE pigs(
    id_pen INTEGER NOT NULL,
    id_pig SERIAL,
    pig_number CHAR(10) PRIMARY KEY, -- we will see how much it takes to contain this number
    pig_gender GENDER NOT NULL,
    rfid CHAR(255) DEFAULT NULL,
    pig_shopping_date DATE NOT NULL,
    pig_shopping_price FLOAT(10) NOT NULL,
    pig_sale_date DATE DEFAULT NULL,
    pig_selling_cost FLOAT(10) DEFAULT NULL,
    pig_death_date DATE DEFAULT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) -- ON DELETE CASCADE
);

INSERT INTO pigs VALUES (1, 1, 12345, 'Samiec', NULL, '2019-08-05', 400.99, '2019-09-04', 650.00, NULL);

----------------- BADANIE ------------------
CREATE TABLE examinations(
    number_pig CHAR(10) NOT NULL,
    exam_id SERIAL PRIMARY KEY,
    exam_date DATE NOT NULL,
    exam_time TIME NOT NULL,
    feces FLOAT(5) DEFAULT NULL,
    tissue CHAR(255) DEFAULT NULL,
    exam_result CHAR(255) DEFAULT NULL,
    medicine CHAR(255) DEFAULT NULL,
    medicine_qty SMALLINT DEFAULT NULL,
    medicine_type CHAR(255) DEFAULT NULL,
    diarrhea ZERO_TO_THREE_RATE NOT NULL,
    weight FLOAT(2) NOT NULL,
    temperature FLOAT(3) NOT NULL,
    lameness ZERO_TO_TWO_RATE NOT NULL,
    respiratory_system ZERO_TO_THREE_RATE NOT NULL,
    skin_changes CHAR(255) DEFAULT NULL,
    FOREIGN KEY (number_pig) REFERENCES pigs(pig_number) -- ON DELETE CASCADE
);

INSERT INTO examinations VALUES (12345, 1, '2019-09-17', '20:00:00', NULL, NULL, NULL, NULL, NULL, NULL, '1', 64.5, 38.5, '1', '2', NULL);