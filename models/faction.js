const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSQLSet.js');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Factions WHERE idfaction = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Factions', id);
    return null;
  };

const create = async (newAttributes) => {
    return db
      .query(
        `INSERT INTO Factions SET ${definedAttributesToSqlSet(newAttributes)}`,
        newAttributes
      )
      .then((res) => findOne(res.insertId));
  };

const getCollection = async () => {
    return db.query(`Select * from Factions`);
}

  module.exports = {
      create,
      findOne,
      getCollection,
  };