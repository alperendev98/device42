const fetchInstances = require('../actions/fetchInstances.js');

module.exports = (req, res) => {
    fetchInstances(req, res)
    .then((books) => {
        res.status(200).json({
            success: books
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when fetching all instances.',
            reason: err
        });
    });
};