const db = require('../config/database');

exports.getAllContacts = (callback) => {
  const sql = 'SELECT * FROM contacts';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
};

exports.addContact = (contactData, callback) => {
  const { firstName, lastName, email, address, phone, age } = contactData;
  const sql =
    'INSERT INTO contacts (firstName, lastName, email, address, phone, age) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(
    sql,
    [firstName, lastName, email, address, phone, age],
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
};

exports.getContactById = (contactId, callback) => {
  const sql = 'SELECT * FROM contacts WHERE id = ?';
  db.query(sql, [contactId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    if (result.length === 0) {
      return callback(null, null);
    }
    return callback(null, result[0]);
  });
};

exports.updateContact = (contactId, updatedContactData, callback) => {
  const { firstName, lastName, email, address, phone, age } =
    updatedContactData;

  const sql = `
    UPDATE contacts
    SET firstName = ?, lastName = ?, email = ?, address = ?, phone = ?, age = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [firstName, lastName, email, address, phone, age, contactId],
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
};

exports.deleteContact = (contactId, callback) => {
  const sql = 'DELETE FROM contacts WHERE id = ?';
  db.query(sql, [contactId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};
