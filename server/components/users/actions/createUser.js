const knex = require('../../../dbConnect');

/*

POST /api/v1/users HTTP/1.1
Host: localhost:5000
Content-Type: application/x-www-form-urlencoded

username=test3&password=test3

*/
module.exports = (req, res) => {
  return knex('User')
  .insert({
    username: req.body.username,
    password: req.body.password,
  }).returning('*');
};