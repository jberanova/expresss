const productService =  require("../servises/products/products");


exports.getAllChainsaw = (req, res) => {
    res.send("GET ALL BOOKS");
  };


exports.getAllChainsawById = (req, res) => {
    const myChainsaw = {
        name: "super chainsaw x9000",
        prince: 18999
    };
    res.send({
        requested_urls: `http://localhost:3000/chainsaw/${req.params.id}`,
        requested_method: "GET",
        chainsaw: myChainsaw
    });
};

exports.createChainsaw = (req, res) => {
    const myChainsaw = {
        name: req.body.name,
        price: req.body.price
    }
    
    res.send({
        requested_urls: `http://localhost:3000/chainsaw/${req.params.id}`,
        requested_method: "POST",
        created_chainsaw: {
            myChainsaw,
            url: `http://localhost:3000/chainsaw/6`
        }
    })
};

exports.patchChainsaw = (req, res) => {
    const update = {};
    for (let ops of req.body) {
        update[ops.propsName] = ops.value;
    }
    res.send({
        requested_urls: `http://localhost:3000/chainsaw/${req.params.id}`,
        requested_method: "PATCH",
        created_chainsaw: {
            update,
            url: `http://localhost:3000/chainsaw/${req.params.id}`
        }
    })
};

exports.updateChainsaw = (req, res) => {
    const myChainsaw = {
        _id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        ahoj: req.body.ahoj
    }
    
    res.send({
        requested_urls: `http://localhost:3000/chainsaw/${req.params.id}`,
        requested_method: "PUT",
        created_chainsaw: {
            myChainsaw,
            url: `http://localhost:3000/chainsaw/${myChainsaw._id}`
        }
    })
};



exports.deleteChainsaw = (req, res) => {
    res.send("Deleted all chainsaw");
};

exports.deleteChainsaw = (req, res) => {
    res.send(`"Deleted chainsaw: ${req.params.id}"`);
};