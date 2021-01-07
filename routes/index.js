import factionsRoutes from './factions';

// eslint-disable-next-line
export default (app) => {
  app.use('/factions', factionsRoutes);
};
