const deleteUser = require('../actions/deleteUser.js');

module.exports = (req, res) => {
    deleteUser(req, res).then((user) => {
        res.status(200).json({
            success: user
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when deleting a site visit user.',
            reason: err
        });
    });
};