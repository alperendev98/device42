const deleteInstance = require('../actions/deleteInstance.js');

module.exports = (req, res) => {
    deleteInstance(req, res).then((book) => {
        res.status(200).json({
            success: book
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when deleting a site visit book.',
            reason: err
        });
    });
};