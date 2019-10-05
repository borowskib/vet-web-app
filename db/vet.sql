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

INSERT INTO global_measures (global_measure_date, global_measure_time,
 global_nh_three, global_h_two_s, global_co_two, global_temperature,
 global_wetness) VALUES ('2019-09-17', '18:30:00', 4, 3, 2, 23, 55);

---------------- KOJEC --------------------
CREATE TABLE pen(
    pen_id SERIAL PRIMARY KEY,
    pen_area_size FLOAT(3) NOT NULL
);

INSERT INTO pen(pen_area_size) VALUES (8.56);
INSERT INTO pen(pen_area_size) VALUES (8.26);
INSERT INTO pen(pen_area_size) VALUES (8.36);
INSERT INTO pen(pen_area_size) VALUES (8.46);
INSERT INTO pen(pen_area_size) VALUES (8.16);
INSERT INTO pen(pen_area_size) VALUES (8.86);

---------------- POMIAR --------------------
CREATE TABLE pen_measures(
    id_pen INTEGER NOT NULL,
    pen_measure_id SERIAL,
    pen_measure_date DATE NOT NULL,
    pen_measure_time TIME NOT NULL,
    pen_breakdown TEXT DEFAULT NULL,
    pen_dosatron SMALLINT DEFAULT NULL,
    pen_dosatron_addition TEXT DEFAULT NULL,
    pen_forage INTEGER NOT NULL,
    pen_forage_qty_used FLOAT(5) DEFAULT NULL,
    pen_water SMALLINT NOT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) ON DELETE CASCADE
);

 INSERT INTO pen_measures(id_pen, pen_measure_date, pen_measure_time, pen_breakdown,
 pen_dosatron, pen_dosatron_addition, pen_forage, pen_forage_qty_used, pen_water)
 VALUES (1, '2019-09-17', '19:00:00', 'Uszkodzone poidlo', NULL, NULL, 1, 14.9, 45);

----------------- PASZA --------------------
CREATE TABLE forage(
    id_pen INTEGER NOT NULL,
    forage_about TEXT DEFAULT NULL,
    forage_qty FLOAT(10) NOT NULL,
    forage_price FLOAT(5) NOT NULL,
    forage_creation_date DATE NOT NULL,
    forage_producer TEXT NOT NULL,
    forage_expiration_date DATE NOT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) ON DELETE CASCADE
);


 INSERT INTO forage (id_pen, forage_about, forage_qty, forage_price, forage_creation_date,
 forage_producer, forage_expiration_date)
 VALUES (1, 'Pasza dedykowana trzodzie chlewnej z dodatkiem witamin i mineralow',
   1000, 4.5, '2019-01-01', 'Pasnik', '2020-11-01');

----------------- ŚWINIE ------------------
CREATE TABLE pigs(
    id_pen INTEGER NOT NULL,
    id_pig SERIAL,
    pig_number CHAR(10) PRIMARY KEY, -- we will see how much it takes to contain this number
    pig_gender GENDER NOT NULL,
    rfid CHAR(10) DEFAULT NULL,
    pig_shopping_date DATE NOT NULL,
    pig_shopping_price FLOAT(10) NOT NULL,
    pig_sale_date DATE DEFAULT NULL,
    pig_selling_cost FLOAT(10) DEFAULT NULL,
    pig_death_date DATE DEFAULT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) ON DELETE CASCADE
);

 INSERT INTO pigs (id_pen, pig_number, pig_gender, rfid, pig_shopping_date,
 pig_shopping_price, pig_sale_date, pig_selling_cost, pig_death_date)
 VALUES ( 1, 1234567823, 'Samiec', NULL, '2019-08-05', 400.99, '2019-09-04', 650.00, NULL);

----------------- BADANIE ------------------
CREATE TABLE examinations(
    number_pig CHAR(10) NOT NULL,
    exam_id SERIAL PRIMARY KEY,
    exam_date DATE NOT NULL,
    exam_time TIME NOT NULL,
    feces FLOAT(5) DEFAULT NULL,
    tissue TEXT DEFAULT NULL,
    exam_result TEXT DEFAULT NULL,
    medicine TEXT DEFAULT NULL,
    medicine_qty SMALLINT DEFAULT NULL,
    medicine_type TEXT DEFAULT NULL,
    diarrhea ZERO_TO_THREE_RATE NOT NULL,
    weight FLOAT(2) NOT NULL,
    temperature FLOAT(3) NOT NULL,
    lameness ZERO_TO_TWO_RATE NOT NULL,
    respiratory_system ZERO_TO_THREE_RATE NOT NULL,
    skin_changes TEXT DEFAULT NULL,
    FOREIGN KEY (number_pig) REFERENCES pigs(pig_number) ON DELETE CASCADE
);

 INSERT INTO examinations (number_pig, exam_date, exam_time, feces, tissue,
 exam_result, medicine, medicine_qty, medicine_type, diarrhea, weight, temperature,
 lameness, respiratory_system, skin_changes)
 VALUES (1234567823, '2019-09-17', '20:00:00', NULL, NULL, NULL, NULL, NULL, NULL,
   '1', 64.5, 38.5, '1', '2', NULL);

