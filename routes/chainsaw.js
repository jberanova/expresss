var express = require('express');
var router = express.Router();

const chainsawController = require("../controllers/chainsaw");

/**
 *Get all books
 *URL: localhost:3000/books
 *Method: GET
 */

/* GET home page. */
router.get('/', chainsawController.getAllChainsaw);

/**
 * Get chainsaw by id
 * URL: localhost:3000/chainsaw/:id
 * Metod: GET
 */

router.get("/:id", chainsawController.getAllChainsawById);

/**
 * Create book
 * URL: localhost/chainsaw
 * Method: POST
 */

router.post("/", chainsawController.createChainsaw);

/**
 * Patch (update a small part) chainsaw
 * URL: localhost:3000/chainsaw/:id
 * Method: PATCH
 */

router.patch("/:id", chainsawController.patchChainsaw);

/**
 * Put (whole object) chainsaw
 * URL: localhost:3000/chainsaw/:id
 * Method: PUT
 */

router.put("/:id", chainsawController.updateChainsaw);

/**
 * Delete chainsaw
 * URL: localhost:3000/chainsaw
 * Method: DELETE
 */

router.delete("/", chainsawController.deleteChainsaw);

/**
 * Delete chainsaw by id
 * URL: localhost:3000/chainsaw/:id
 * Method: DELETE
 */

router.delete("/:id", chainsawController.deleteChainsaw);


module.exports = router

