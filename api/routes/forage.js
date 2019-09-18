const express = require('express')
const router = express.Router()
const pool = require('../pg-set')

// GET - All
router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM forage',
    (error, results) => {
        if(error) {throw error}
        res.status(200).json(results.rows)
    })
})

// GET - ById

// POST

// DELETE

// UPDATE


module.exports = router
