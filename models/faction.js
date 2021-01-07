const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSQLSet.js');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM factions WHERE id = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('factions', id);
    return null;
  };

const create = async (newAttributes) => {
    return db
      .query(
        `INSERT INTO factions SET ${definedAttributesToSqlSet(newAttributes)}`,
        newAttributes
      )
      .then((res) => findOne(res.insertId));
  };

  module.exports = {
      create,
      findOne,
  };