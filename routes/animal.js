var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send("get all animals");
});

/**
 * get animal by id
 * URL: /animal/:id
 * metod: GET
 */
router.get('/:id', (req, res) => {
    res.send(`animals: ${req.params.id}`);
  });


  /**
   * created animal
   * URL: /animal
   * metod: POST (vytverime)
   */
  router.post('/', (req, res) => {
    res.send(`created aminal`);
  });

  /**
   * upade animal
   * URL: /animal/:id
   * metod: PUT (aktualizuje cely produkt)
   */
  router.put('/:id', (req, res) => {
    res.send(`Upade animal: ${req.params.id}`);
  });

  /**
   * patched animal
   * URL: /produkt/:id 
   * metod: PATCH (aktuslizujeme jen cast produktu)
   */
  router.patch('/:id', (req, res) => {
    res.send(`patched animal: ${req.params.id}`);
  });

  /**
   * delete animal
   * URL: /animal/:id
   * metod: delete
   */
  router.delete('/:id', (req, res) => {
    res.send(`delete animal: ${req.params.id}`);
  });
module.exports = router;
