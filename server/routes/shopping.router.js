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

router.post('/', (req, res) => {
    // Obtain the new element from the BODY
    let item = req.body;

    // Make DB Query
    const dbQuery = `INSERT INTO shopping ("name", "quantity", "unit", "purchased")
                    VALUES ($1, $2, $3, $4);`;

    // New shopping item to add to the database
    const newShoppingItem = [
        item.name,
        item.quantity,
        item.unit,
        item.purchased,
    ];

    pool
        .query(dbQuery, newShoppingItem)
        .then((result) => {
            res.status(201).send("Shopping item sucessfully added to the list");
        })
        .catch((error) => {
            res.status(400).send("Unable to add item to the database");
            console.error("Unable to POST item to the database: ", error);
        });
});

// router.put('/reset-list', (req, res) => {
    
// })

router.delete('/', (req, res) => {
    // Make our DB Query
    const dbQuery = 'DELETE FROM shopping;';

    //Manage Connections
    pool
        .query(dbQuery)
        .then((result) => {
            res.status(200).send("All Itmes deleted from the database");
        })
        .catch((error) => {
            console.error("Error deleting items from the database: ", error);
        });
});

// Export Router
module.exports = router;