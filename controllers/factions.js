const { create, findOne, getCollection } = require('../models/faction.js');

module.exports.handlePost = async (req, res) => {
    const { namefaction, race } = req.body;
    const data = await create({ namefaction, race });
    return res.status(201).send(data);
  };

module.exports.findOne = async (req, res) => {
    res.send(await findOne(req.params.id));
}
module.exports.getCollection = async (req, res) => {
    const rawData = await getCollection();
    res.send(rawData.map((f) => ({
        idfaction: f.id,
        name: f.namefaction,
        race: f.race,
      })));
}