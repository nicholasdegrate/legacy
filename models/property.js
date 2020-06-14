const mongoose = require('mongoose');

// employee login in
const PropertySchema = new mongoose.Schema({
    location: {
        type : String,
        required: true
    },
     price: {
        type : String,
        required : true,
    },
    bed: {
        type : Number,
        required : true,
    },
    bath: {
        type: Number,
        required: true,
    },
    footage: {
        type: String,
        required: true,
    },
    listingItem: {
        type: String,
        required: true
    },
    aboutListing: {
        type: String,
        unique: true,
        required: true,
    },
    date: {
        type : Date,
        default: Date.now,
    }
});

//employee
const Property = new mongoose.model('Properties', PropertySchema);

module.exports = Property;