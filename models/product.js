const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema ( {
    id : Number,
    name: String,
    description: String,
    price: Number,
    image: String,
    care: String,
    diameter: Number,
    size: Number,
    brightness: Array,
    water: String,
    place: String,
    type: Array
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;