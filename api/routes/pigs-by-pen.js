const express = require('express');
const router = express.Router();
const pool = require('../pg-set');

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM pen JOIN pigs ON id_pen = pen_id',
        (error, results) => {
            if(error) {throw error}
            res.status(200).json(results.rows)
        })
});

// GET - ById
router.get('/:id', (req, res, next) => {
    const id = (req.params.id);

    pool.query('SELECT * FROM pen JOIN pigs ON id_pen = pen_id WHERE id_pen = $1', [id], (error, results) => {
        if(error) { throw error }
        res.status(200).json(results.rows)
    })
});




module.exports = router;