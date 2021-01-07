const { create } = require('../models/faction.js');

module.exports.handlePost = async (req, res) => {
    const { namefaction, race } = req.body;
    const data = await create({ namefaction, race });
    return res.status(201).send(data);
  };

