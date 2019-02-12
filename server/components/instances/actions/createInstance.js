const knex = require('../../../dbConnect');

/*
POST /api/v1/instances HTTP/1.1
Host: localhost:5000
Content-Type: application/x-www-form-urlencoded

userid=3&username=admin&password=adm!nd42&server_url=http%3A%2F%2F151.181.77.121&name=server2
*/
module.exports = (req, res) => {
  return knex('Instance')
  .insert({
    userid: req.body.userid,
    name: req.body.name,
    server_url: req.body.server_url,
    username: req.body.username,
    password: req.body.password,
  }).returning('*');
};