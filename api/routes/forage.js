const express = require('express');
const router = express.Router();
const pool = require('../pg-set');

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM forage',
        (error, results) => {
            if(error) {throw error}
            res.status(200).json(results.rows)
        })
});

// GET - ById
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM forage WHERE id_pen = $1', [id], (error, results) => {
        if(error) { throw error }
        res.status(200).json(results.rows)
    })
});

// UPDATE - PUT
/*
 * curl -X PUT -d "forage_about=Pasza cośtam" -d "forage_qty=900" -d "forage_price=5" -d "forage_creation_date=2018-11-12" -d "forage_producer=wojtek" -d "forage_expiration_date=2020-10-10" http://localhost:9000/forage/1
 */
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const { forage_about, forage_qty, forage_price, forage_creation_date, forage_producer,
        forage_expiration_date} = req.body;

    pool.query(
        'UPDATE forage SET forage_about = $1, forage_qty = $2, forage_price = $3, forage_creation_date = $4, ' +
            'forage_producer = $5, forage_expiration_date = $6 WHERE id_pen = $7',
        [ forage_about, forage_qty, forage_price, forage_creation_date, forage_producer,
            forage_expiration_date, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Modified FORAGE with number: ${id}`)
        }
    )
});


module.exports = router;
