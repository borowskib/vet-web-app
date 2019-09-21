const express = require('express')
const router = express.Router()
const pool = require('../pg-set')

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM global_measures',
    (error, results) => {
        if(error) {throw error}
        res.status(200).json(results.rows)
    })
});

// GET - ById



// POST
// TODO: date isn't working from Postman side (we will see at the front)
// TODO: update - works with curl :
/*
curl --data "global_measure_date="2019-09-21"&global_measure_time="11:00"&global_nh_three=3&global_h_two_s=1&global_co_two=1&global_temperature=23&global_wetness=44" http://localhost:9000/global-measures
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
            response.status(201).send(`Global measure added.`)
        })
});

// DELETE - not sure if we are going to use delete. It is there just in case.

// UPDATE


module.exports = router
