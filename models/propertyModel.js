const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertyModel = new Schema({

    id: { type: 'Number' },
    tag: { type: 'String' },
    title: { type: 'String' },
    desc: { type: 'String' },
    price: { type: 'String' },
    location: { type: 'String' },
    availability: { type: 'String' },
    deposit: { type: 'String' },
    commission: { type: 'String' },
    factor: { type: 'String' },
    img: { type: ['String'] }
    
});

module.exports = mongoose.model('Property', PropertyModel);