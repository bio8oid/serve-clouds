const Property = require('../../models/propertyModel');

module.exports = {

    // Retrieve all properties from server

    properties: async ({filter}) => {
        try {
            let properties;
            if(filter !== undefined) {
                const query = JSON.parse(filter)
                 properties = await Property.find(query);
            } else {
                 properties = await Property.find();
            }
            return properties
        } catch (err) {
            throw err;
        }
    },


    // Create and save new property on server

    createProperty: args => {
        const property = new Property({
            id: args.propertyInput.id,
            tag: args.propertyInput.tag,
            title: args.propertyInput.title,
            desc: args.propertyInput.desc,
            price: args.propertyInput.price,
            location: args.propertyInput.location,
            availability: args.propertyInput.availability,
            deposit: args.propertyInput.deposit,
            commission: args.propertyInput.commission,
            factor: args.propertyInput.factor,
            img: args.propertyInput.img,
        });
        return property
        .save()
        .then(result => result)
        .catch(err => console.log(err))
    }
};