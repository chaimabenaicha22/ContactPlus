const contactModel = require('../models/contact');

exports.getAllContacts = (req, res) => {
  contactModel.getAllContacts((err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des contacts :', err);
      res
        .status(500)
        .json({ error: 'Erreur lors de la récupération des contacts' });
      return;
    }
    res.json(results);
  });
};

exports.addContact = (req, res) => {
  const { firstName, lastName, email, address, phone, age } = req.body;
  const contactData = { firstName, lastName, email, address, phone, age };
  contactModel.addContact(contactData, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout du contact :", err);
      res.status(500).json({ error: "Erreur lors de l'ajout du contact" });
      return;
    }
    res.json({ message: 'Contact ajouté avec succès' });
  });
};

exports.getContactById = (req, res) => {
  const contactId = req.params.id;
  contactModel.getContactById(contactId, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération du contact :', err);
      res
        .status(500)
        .json({ error: 'Erreur lors de la récupération du contact' });
      return;
    }
    if (!result) {
      res.status(404).json({ error: 'Contact non trouvé' });
      return;
    }
    res.json(result);
  });
};

exports.updateContact = (req, res) => {
  const contactId = req.params.id;
  const { firstName, lastName, email, address, phone, age } = req.body;
  const updatedContactData = {
    firstName,
    lastName,
    email,
    address,
    phone,
    age,
  };
  contactModel.updateContact(contactId, updatedContactData, (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du contact :', err);
      res
        .status(500)
        .json({ error: 'Erreur lors de la mise à jour du contact' });
      return;
    }
    res.json({ message: 'Contact mis à jour avec succès' });
  });
};

exports.deleteContact = (req, res) => {
  const contactId = req.params.id;
  contactModel.deleteContact(contactId, (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression du contact :', err);
      res
        .status(500)
        .json({ error: 'Erreur lors de la suppression du contact' });
      return;
    }
    res.json({ message: 'Contact supprimé avec succès' });
  });
};
