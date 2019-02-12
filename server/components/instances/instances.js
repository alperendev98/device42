const express = require('express');
const router = express.Router();

let fetchInstances = require('./controllers/fetchInstances.js');
let fetchInstance = require('./controllers/fetchInstance.js');
let createInstance = require('./controllers/createInstance.js');
let editInstance = require('./controllers/editInstance.js');
let deleteInstance = require('./controllers/deleteInstance.js');

router.get('/byuser/:userid', fetchInstances);
router.post('/', createInstance);
router.get('/:id', fetchInstance);
router.put('/:id', editInstance);
router.delete('/:id', deleteInstance);

module.exports = router;