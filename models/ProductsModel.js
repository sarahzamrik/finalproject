const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema (
    {
        salonName: {
            type: String,
            required: true
        }, 
        description: {
            type: String,
            required: true
        },
        salonImage: {
            type: String,
        },
        location: {
            type: String, 
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        review: {
            type: Number,
            required: true
        }
    }
);

const ProductsModel = mongoose.model('products', ProductsSchema);
module.exports = ProductsModel; 

//added .env file
// matched product keys from models and routes
// hope this works
