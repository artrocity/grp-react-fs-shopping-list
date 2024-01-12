// Import modules
const pg = require('pg');

// Establishing the connection to the database
const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'fs-react-shopping', 
});

// Exporting the pool variable
module.exports = pool;
