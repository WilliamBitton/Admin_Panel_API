const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const products = new Schema({
    title: {
        type: String,
        required: [true],
        maxLength: 50
    },
    description: {
        type: String,
        required: [true],
        maxLength: 255
    },
    price: {
        type: Number,
        required: [true]
    },
    // imageUrl: {
    //     type: Array,
    //     required: [true],
    //     maxLength: 255
    // },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: [true],
    },
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users',
    //     required: [true],
    // },
    isSold: {
        type: Boolean,
        required: [true]
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('products', products)