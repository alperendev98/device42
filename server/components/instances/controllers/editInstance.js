const editInstance = require('../actions/editInstance.js');

module.exports = (req, res) => {
   editInstance(req, res)
   .then((book) => {
      res.status(200).json({
         success: book
      });
   }).catch((err) => {
         res.status(500).json({
            error: 'An error occurred when editing a site visit book.',
            reason: err
         });
   });
};