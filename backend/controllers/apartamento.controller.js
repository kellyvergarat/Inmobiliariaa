const ctrlApartamento = {};
const Apartamento = require('../models/apartamento.model');

/*ctrlApartamento.create = async (req, res) => {
    try {
        const newApartamento = new Apartamento({
            rentPrice: req.body.rentPrice,
            description: req.body.description,
            address: req.body.address,
            picture: req.body.picture,
            rooms: req.body.rooms,
            bathrooms: req.body.bathrooms,
            location: req.body.location,
            visits: 0,
        });
        await newApartamento.save()
        res.json({
            status: true,
            data: newProperty
        })
    }
    catch (error) {
        res.json({
            status: false,
            error: error
        })
    }

}

module.exports = ctrlApartamento;*/