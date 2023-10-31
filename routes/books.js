var express = require('express');
const { route } = require('.');
var router = express.Router();


/**
 *Get all books
 *URL: localhost:3000/books
 *Method: GET
 */

/* GET home page. */
router.get('/', (req, res) => {
  res.send("GET ALL BOOKS");
});

/**
 * Get books by id
 * URL: localhost:3000/books/:id
 * Metod: GET
 */

router.get("/:id", (req, res) => {
    res.send(`Book: ${req.params.id}`);
});

/**
 * Create book
 * URL: localhost/books
 * Method: POST
 */

router.post("/", (req, res) => {
    res.send("Vytvářím knížku");
});

/**
 * Patch (update a small part) book
 * URL: localhost:3000/books/:id
 * Method: PATCH
 */

router.patch("/:id", (req, res) => {
    res.send(` Patched book: ${req.params.id}`);
});

/**
 * Put (whole object) book
 * URL: localhost:3000/books/:id
 * Method: PUT
 */

router.patch("/:id", (req, res) => {
    res.send(` Update book: ${req.params.id}`);
});

/**
 * Delete book
 * URL: localhost:3000/books
 * Method: DELETE
 */

router.patch("/", (req, res) => {
    res.send("Deleted all books");
});

/**
 * Delete book by id
 * URL: localhost:3000/books/:id
 * Method: DELETE
 */

router.patch("/:id", (req, res) => {
    res.send(`"Deleted books: ${req.params.id}"`);
});


module.exports = router