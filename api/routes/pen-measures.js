const express = require('express');
const router = express.Router();
const pool = require('../pg-set');

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM pen_measures',
    (error, results) => {
        if(error) {throw error}
        res.status(200).json(results.rows)
    })
});

// GET - ById
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM pen_measures WHERE pen_measure_id = $1', [id], (error, results) => {
        if(error) { throw error }
        res.status(200).json(results.rows)
    })
});

// POST
router.post('/', (request, response) => {
    const { id_pen, pen_measure_date, pen_measure_time, pen_breakdown, pen_dosatron, pen_dosatron_addition,
        pen_forage, pen_forage_qty_used, pen_water } = request.body;

    pool.query('INSERT INTO pen (id_pen, pen_measure_date, pen_measure_time, pen_breakdown, pen_dosatron, ' +
        'pen_dosatron_addition, pen_forage, pen_forage_qty_used, pen_water) VALUES ($1. $2, $3, $4, $5, $6, $7, $8, $9)',
        [ id_pen, pen_measure_date, pen_measure_time, pen_breakdown, pen_dosatron, pen_dosatron_addition,
            pen_forage, pen_forage_qty_used, pen_water ], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Created PEN MEASURES entry in PEN number ${id_pen}`)
        })
});

// TODO: Check if pen_measure_id (id created in run) works
// UPDATE - PUT
router.put('/:id', (req, res, next) => {
    const id = (req.params.id);
    const { id_pen, pen_measure_date, pen_measure_time, pen_breakdown, pen_dosatron,
        pen_dosatron_addition, pen_forage, pen_forage_qty_used, pen_water } = req.body;

    pool.query(
        'UPDATE pen_measures SET id_pen = $1, pen_measure_date = $2, pen_measure_time = $3, pen_breakdown = $4, ' +
        'pen_dosatron = $5, pen_dosatron_addition = $6, pen_forage = $7, pen_forage_qty_used = $8, pen_water = $9 ' +
        'WHERE pen_measure_id = $10',
        [ id_pen, pen_measure_date, pen_measure_time, pen_breakdown, pen_dosatron,
            pen_dosatron_addition, pen_forage, pen_forage_qty_used, pen_water, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Modified PEN MEASURE with number: ${id}`)
        }
    )
});

module.exports = router
