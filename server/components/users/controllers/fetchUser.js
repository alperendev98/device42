const fetchUser = require('../actions/fetchUser.js');

module.exports = (req, res) => {
    fetchUser(req, res)
    .then((user) => {
        if (Object.keys(user).length !== 0) {
            res.status(200).json({
                success: user
            });
        }else {
            res.status(400).json({
                message: 'no user found'
            });
        }
        
    }).catch((err) => {
        res.status(500).json({
            message: 'Invaild login info',
            reason: err
        });
    });
};