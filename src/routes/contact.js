const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.js');

router.get('/contacts', contactController.getAllContacts);

router.post('/contacts', contactController.addContact);

router.get('/contacts/:id', contactController.getContactById);

router.put('/contacts/:id', contactController.updateContact);

router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
