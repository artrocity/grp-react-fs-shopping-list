// Import Modules
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Routes
router.get('/', (req, res) => {
    // Make our DB Query
    const dbQuery = 'SELECT * FROM shopping ORDER BY name ASC;';

    // Manage Database connections
    pool
        .query(dbQuery)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            res.status(500).send("Error fetching the shopping list from the database")
            console.error("ERROR fetching shopping database: ", error);
        });
});

// Export Router
module.exports = router;