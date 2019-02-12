const knex = require('../../../dbConnect');

//localhost:5000/api/v1/instances/byuser/1

module.exports = (req, res) => {
    return knex('Instance').where({
        userid: req.params.userid
    });
};