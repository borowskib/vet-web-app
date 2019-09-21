const express = require('express');
const router = express.Router();
const pool = require('../pg-set');

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM pen',
    (error, results) => {
        if(error) {throw error}
        res.status(200).json(results.rows)
    })
});

// GET - ById
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM pen WHERE pen_id = $1', [id], (error, results) => {
        if(error) { throw error }
        res.status(200).json(results.rows)
    })
});

// POST // TODO: skipped from index 1 to 4
/************************************************************
 * curl --data "pen_area_size=5.27" http://localhost:9000/pen
 */
router.post('/', (request, response) => {
    const { pen_area_size } = request.body;

    pool.query('INSERT INTO pen (pen_area_size) VALUES ($1)',
        [ pen_area_size ], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`PEN created.`)
        })
});

// DELETE - works only when there is ON CASCADE DELETE at our database table (check db/vet.sql file)
/************************************************************
 * curl -X "DELETE" http://localhost:9000/pen/1
 */

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM pen WHERE pen_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Deleted PEN number: ${id}`)
    })
});


// UPDATE - PUT
/************************************************************
 * curl -X PUT -d "pen_area_size=4.44" http://localhost:9000/pen/1
 */
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const { pen_area_size } = req.body;

    pool.query(
        'UPDATE pen SET pen_area_size = $1 WHERE pen_id = $2',
        [pen_area_size, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Modified PEN with ID: ${id}`)
        }
    )
});

module.exports = router;