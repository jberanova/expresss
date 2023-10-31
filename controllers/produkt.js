exports.getAllProdukts = (req, res) => {
    res.send(`Patched product: ${req.params.id}`);
  };


exports.getProduktById =  (req, res) => {
    res.send(`product: ${req.params.id}`);
  };

exports.createProdukt = (req, res) => {
    res.send(`Created product`);
  };

exports.upatedWholeProdukt = (req, res) => {
    res.send(`Upade product: ${req.params.id}`);
  };
  
  exports.getAllProdukts = (req, res) => {
    res.send(`Patched product: ${req.params.id}`);
  };