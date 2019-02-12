const createUser = require('../actions/createUser.js');

module.exports = (req, res) => {
    createUser(req, res).then((user) => {
        res.status(200).json({
            success: user
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when adding a site visit user.',
            reason: err
        });
    });
};