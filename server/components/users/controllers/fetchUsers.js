const fetchUsers = require('../actions/fetchUsers.js');

module.exports = (req, res) => {
    fetchUsers(req, res)
    .then((users) => {
        res.status(200).json({
            success: users
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when fetching all instances.',
            reason: err
        });
    });
};