const createInstance = require('../actions/createInstance.js');

module.exports = (req, res) => {
    createInstance(req, res).then((instacne) => {
        res.status(200).json({
            success: instacne
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when adding a instance.',
            reason: err
        });
    });
};