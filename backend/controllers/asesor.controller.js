const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const ctrlAsesor = {},
    Asesor = require('../models/asesor.model')

ctrlAsesor.create = async (req, res) => {
    try {
        const newAsesor = new Asesor({
            name: req.body.name,
            document: req.body.document,
            password: req.body.password,
            phone: req.body.phone
        });
        await newAsesor.save()
        res.json({ status: true })
    }
    catch (error) {
        res.json({
            status: false,
            error: error
        })
    }
}

module.exports = ctrlAsesor;