const knex = require('../../../dbConnect');

/*
POST /api/v1/users/login HTTP/1.1
Host: localhost:5000
Content-Type: application/x-www-form-urlencoded

username=test1&password=test1
*/
module.exports = (req, res) => {
  return knex('User').where({
    username: req.body.username,
    password: req.body.password,
  }).first();
};