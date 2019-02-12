const editUser = require('../actions/editUser.js');

module.exports = (req, res) => {
   editUser(req, res)
   .then((user) => {
      res.status(200).json({
         success: user
      });
   }).catch((err) => {
         res.status(500).json({
            error: 'An error occurred when editing a site visit user.',
            reason: err
         });
   });
};