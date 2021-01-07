const factionsRoutes = require('./factions');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/factions', factionsRoutes);
};
