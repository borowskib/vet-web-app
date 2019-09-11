CREATE TYPE ZERO_TO_THREE_RATE AS ENUM ('0', '1', '2', '3');
CREATE TYPE ZERO_TO_TWO_RATE AS ENUM ('0', '1', '2');

CREATE TYPE GENDER AS ENUM('Samiec', 'Samica');

CREATE TABLE general_measures(
    measure_id BIGSERIAL PRIMARY KEY,
    nh_three SMALLINT NULL,
    h_two_s SMALLINT NULL,
    co_two SMALLINT NULL,
    temperature SMALLINT NOT NULL,
    wetness INT NULL,
);

CREATE TABLE pen(
    pen_id SERIAL PRIMARY KEY,
    area_size FLOAT(3) NOT NULL,
    separated BOOLEAN NOT NULL
);

CREATE TABLE pen_measures(
    id_pen SMALLINT NOT NULL,
    measure_date DATE NOT NULL,
    water SMALLINT NOT NULL,
    water_used SMALLINT DEFAULT NULL,
    drinkers SMALLINT NOT NULL,
    breakdown CHAR(1) NOT NULL,
    illumination SMALLINT NOT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) -- ON DELETE CASCADE
);

CREATE TABLE pigs(
    id_pen NOT NULL, 
    id_pig BIGSERIAL,
    pig_number CHAR(20) PRIMARY KEY, -- we will see how much it takes to contain this number
    pig_gender GENDER NOT NULL,
    pig_weight REAL NOT NULL,
    pig_size REAL NOT NULL,
    rfid TEXT DEFAULT NULL,
    FOREIGN KEY (id_pen) REFERENCES pen(pen_id) -- ON DELETE CASCADE
);

CREATE TABLE examination(
    exam_id SERIAL PRIMARY KEY,
    number_pig CHAR(20) NOT NULL,
    exam_number UUID NOT NULL,
    exam_temperature REAL NOT NULL,
    lameness ZERO_TO_TWO_RATE NOT NULL,
    diarrhea ZERO_TO_THREE_RATE NOT NULL,
    skin_changes ZERO_TO_THREE_RATE NOT NULL,
    respiratory_system ZERO_TO_THREE_RATE NOT NULL,
    digestive_system NOT NULL,
    -- oun ZERO_TO_THREE_RATE NOT NULL,
    -- enrocin FLOAT(3) NOT NULL,
    -- shotapen FLOAT(3) NOT NULL,
    -- florkem FLOAT(3) NOT NULL,
    -- rapidoxen
    FOREIGN KEY (number_pig) REFERENCES(pig_number) -- ON DELETE CASCADE
);
