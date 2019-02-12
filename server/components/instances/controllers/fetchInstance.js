const fetchInstance = require('../actions/fetchInstance.js');

module.exports = (req, res) => {
    fetchInstance(req, res)
    .then((book) => {
        res.status(200).json({
            success: book
        });
    }).catch((err) => {
        res.status(500).json({
            message: 'An error occurred when fetching a instance',
            reason: err
        });
    });
};