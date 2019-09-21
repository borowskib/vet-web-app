const express = require('express');
const router = express.Router();
const pool = require('../pg-set');

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM pigs',
    (error, results) => {
        if(error) {throw error}
        res.status(200).json(results.rows)
    })
});

// GET - ById
router.get('/:id', (req, res, next) => {
    const id = (req.params.id);

    pool.query('SELECT * FROM pigs WHERE pig_number = $1', [id], (error, results) => {
        if(error) { throw error }
        res.status(200).json(results.rows)
    })
});

// POST // TODO: pig_sale_date takes random date, 1 day before pig_shopping_date
/************************************************************
 * curl --data "id_pen=1&pig_number=1234512345&pig_gender="Samiec"&rfid=null&pig_shopping_date="2018-09-23"&pig_shopping_price=723" http://localhost:9000/pigs
 */
router.post('/', (request, response) => {
    const { id_pen, pig_number, pig_gender, rfid, pig_shopping_date, pig_shopping_price, pig_sale_date,
        pig_selling_cost, pig_death_date } = request.body;

    pool.query('INSERT INTO pigs (id_pen, pig_number, pig_gender, rfid, pig_shopping_date, ' +
            'pig_shopping_price, pig_sale_date, pig_selling_cost, pig_death_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [ id_pen, pig_number, pig_gender, rfid, pig_shopping_date, pig_shopping_price, pig_sale_date, pig_selling_cost,
            pig_death_date ], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`PIG added.`)
        })
});

// DELETE - works only when there is ON CASCADE DELETE at our database table (check db/vet.sql file)
/************************************************************
 * curl -X "DELETE" http://localhost:9000/pigs/1234567890
 */

router.delete('/:id', (req, res, next) => {
    const id = (req.params.id);

    pool.query('DELETE FROM pigs WHERE pig_number = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Deleted PIG with number: ${id}`)
    })
});


// UPDATE - PUT // TODO: not sure if you can update pig_number when it's key. Check that while dev.
router.put('/:id', (req, res, next) => {
    const id = (req.params.id);
    const { id_pen, pig_number, pig_gender, rfid, pig_shopping_date, pig_shopping_price, pig_sale_date,
        pig_selling_cost, pig_death_date } = req.body;

    pool.query(
        'UPDATE pen SET id_pen = $1, pig_number = $2, pig_gender = $3, rfid = $4, pig_shopping_date = $5, ' +
            'pig_shopping_price = $6 , pig_sale_date = $7, pig_selling_cost = $8, pig_death_date = $9 WHERE ' +
            'pig_number = $10',
        [ id_pen, pig_number, pig_gender, rfid, pig_shopping_date, pig_shopping_price, pig_sale_date, pig_selling_cost,
            pig_death_date, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Modified PIG with number: ${id}`)
        }
    )
});

module.exports = router;