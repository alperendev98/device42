const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('User').where({
    user_id: req.params.id
  }).del();
};