const Product = require("../models/product");
module.exports = {
    getAll(req, res) {
        Product.find().then(products => {
            res.send(products)
        })
    },
    getId(req, res) {
        const id = req.params._id;
        Product.findById(id).then(product => {
            res.send(product)
        })
    },
    update(req, res) {
        const newProduct = { ...req.body }
        const id = req.params._id;
        if (id) {
            Product.findByIdAndUpdate(id, newProduct).then(product => {
                res.send({ result: `Le produit ${product.name} à été mis à jour` })
            })
        } else {
            res.send({ result: "L'id du produit doit-être indiqué pour mettre à jour" })
        }
    },
    delete(req, res) {
        const id = req.params._id;
        Product.findByIdAndRemove(id).then(product => {
            res.send({ result: `Le produit à bien été supprimer` })
        })
    },
    create(req, res) {
        const product = new Product({
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            care: req.body.care,
            diameter: req.body.diameter,
            size: req.body.size,
            brightness: req.body.brightness,
            water: req.body.water,
            place: req.body.place,
            type: req.body.type
        })
        product.save().then(() => {
            res.send({ result: `Création du produit ${product.name}` })
        })
    },
}