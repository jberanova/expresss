var express = require('express');
var router = express.Router();

const produktController = require("../controllers/produkt")


/*
CRUD 
create - 

/**
 * Get all produkts 
 * URL : localhost 3000 / produkt
 * Metod: GET 
 */

router.get('/', produktController.getAllProdukts);

/**
 * Get prokukt by id 
 * URL: /produkt/:id
 * Metod: GET
 */
router.get('/:id', produktController.getProduktById);

/**
 * Create produkt 
 * URL: /produkt
 * Metod: POST (vytvarime)
 */
router.post('/', produktController.createProdukt);

/**
 * Upade product 
 * URL: /produkt/:id
 * Metod: PUT (aktualizujeme cely produkt)
 */
router.put('/:id', produktController.upatedWholeProdukt );



/**
 * PAtched product 
 * URL: /produkt/:id
 * Metod: PATCH (aktualizujeme jen cast produktu)
 */
router.patch('/:id')

/**
 * Delete product 
 * URL: /produkt/:id
 * Metod: DELETE
 */
router.delete('/:id', (req, res) => {
    res.send(`Deleted product: ${req.params.id}`);
  });


module.exports = router;
