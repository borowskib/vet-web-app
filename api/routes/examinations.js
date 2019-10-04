const express = require('express');
const router = express.Router();
const pool = require('../pg-set');

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM examinations',
    (error, results) => {
        if(error) {throw error}
        res.status(200).json(results.rows)
    })
});

router.post('/', (request, response) => {
    const { number_pig, exam_date, exam_time, feces, tissue, exam_result, medicine, medicine_qty, medicine_type,
        diarrhea, weight, temperature, lameness, respiratory_system, skin_changes } = request.body;

    pool.query('INSERT INTO pigs (number_pig, exam_date, exam_time, feces, tissue, exam_result, medicine, medicine_qty, ' +
            'medicine_type, diarrhea, weight, temperature, lameness, respiratory_system, skin_changes) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
        [ number_pig, exam_date, exam_time, feces, tissue, exam_result, medicine, medicine_qty, medicine_type,
            diarrhea, weight, temperature, lameness, respiratory_system, skin_changes ], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`EXAM added.`)
        })
});

// DELETE - works only when there is ON CASCADE DELETE at our database table (check db/vet.sql file)
/************************************************************
 * curl -X "DELETE" http://localhost:9000/pigs/1234567890
 */

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM examinations WHERE exam_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Deleted EXAM with number: ${id}`)
    })
});

// UPDATE - PUT
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const { number_pig, exam_date, exam_time, feces, tissue, exam_result, medicine, medicine_qty,
        medicine_type, diarrhea, weight, temperature, lameness, respiratory_system, skin_changes } = req.body;

    pool.query(
        'UPDATE pen SET number_pig = $1, exam_date = $2, exam_time = $3, feces = $4, tissue = $5, exam_result = $6, ' +
        'medicine = $7, medicine_qty = $8, medicine_type = $9, diarrhea = $10, weight = $11, temperature = $12, ' +
        'lameness = $13, respiratory_system = $14, skin_changes = $15 ' +
            'WHERE exam_id = $16',
        [ number_pig, exam_date, exam_time, feces, tissue, exam_result, medicine, medicine_qty,
            medicine_type, diarrhea, weight, temperature, lameness, respiratory_system, skin_changes, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Modified EXAM with number: ${id}`)
        }
    )
});

module.exports = router;
