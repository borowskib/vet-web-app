const express = require('express');
const router = express.Router();
const pool = require('../pg-set');

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM global_measures',
    (error, results) => {
        if(error) {throw error}
        res.status(200).json(results.rows)
    })
});

// POST
// TODO: date isn't working from Postman side (we will see at the front)
// TODO: update - works with curl :
/*
 * curl --data "global_measure_date="2019-09-21"&global_measure_time="11:00"&global_nh_three=3&global_h_two_s=1&global_co_two=1&global_temperature=23&global_wetness=44" http://localhost:9000/global-measures
 */
router.post('/', (request, response) => {
    const { global_measure_date, global_measure_time, global_nh_three, global_h_two_s,
        global_co_two, global_temperature, global_wetness } = request.body;

    pool.query('INSERT INTO global_measures (global_measure_date, global_measure_time, global_nh_three, global_h_two_s, ' +
        'global_co_two, global_temperature, global_wetness) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [ global_measure_date, global_measure_time, global_nh_three, global_h_two_s,
            global_co_two, global_temperature, global_wetness ], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`GLOBAL MEASURE added.`)
        })
});

// UPDATE - PUT
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const { global_measure_date, global_measure_time, global_nh_three, global_h_two_s, global_co_two,
        global_temperature, global_wetness } = req.body;

    pool.query(
        'UPDATE global_measures SET global_measure_date = $1, global_measure_time = $2, global_nh_three = $3, global_h_two_s = $4, ' +
           'global_co_two = $5, global_temperature = $6, global_wetness = $7 WHERE global_measure_id = $8',
        [ global_measure_date, global_measure_time, global_nh_three, global_h_two_s,
            global_co_two, global_temperature, global_wetness, id ],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Modified GLOBAL MEASURE with number: ${id}`)
        }
    )
});

module.exports = router;
