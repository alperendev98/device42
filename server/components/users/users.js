const express = require('express');
const router = express.Router();

// let fetchUsers = require('./controllers/fetchUsers.js');
let fetchUser = require('./controllers/fetchUser.js');
let createUser = require('./controllers/createUser.js');
let editUser = require('./controllers/editUser.js');
let deleteUser = require('./controllers/deleteUser.js');

// router.get('/', fetchUsers);
router.post('/', createUser);
router.post('/login', fetchUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;