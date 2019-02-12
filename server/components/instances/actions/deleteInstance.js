const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('Instance').where({
    instance_id: req.params.id
  }).del();
};