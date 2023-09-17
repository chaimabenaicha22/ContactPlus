const contactForm = document.getElementById('contactForm');
const addContactButton = document.getElementById('addContact');
const updateContactButton = document.getElementById('updateContact');
const deleteContactButton = document.getElementById('deleteContact');
const contactTable = document
  .getElementById('contactTable')
  .getElementsByTagName('tbody')[0];

function displayContacts() {
  fetch('http://localhost:3000/contacts')
    .then((response) => response.json())
    .then((contacts) => {
      contactTable.innerHTML = '';
      contacts.forEach((contact) => {
        const row = contactTable.insertRow();
        row.innerHTML = `<td>${contact.lastName}</td><td>${contact.firstName}</td><td>${contact.email}</td><td>${contact.address}</td><td>${contact.phone}</td><td>${contact.age}</td>  <td>
        
        <i class="fa fa-trash" onclick="deleteContact(${contact.id})" ></i>
        <i class="fa fa-edit"  onclick="openEditPage(${contact.id})"></i>
    </td>   `;
      });
    })
    .catch((error) => console.error(error));
}

const addContact = () => {
  const contactData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    phone: document.getElementById('phone').value,
    age: parseInt(document.getElementById('age').value), // Convertir l'âge en nombre
  };

  fetch('http://localhost:3000/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('address').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('age').value = '';
      displayContacts();
    })
    .catch((error) => console.error(error));
};

addContactButton.addEventListener('click', addContact);

const updateContact = async () => {
  const contactId = document.getElementById('contactId').value;
  const updatedContactData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    phone: document.getElementById('phone').value,
    age: parseInt(document.getElementById('age').value),
  };

  try {
    const response = await fetch(
      `http://localhost:3000/contacts/${contactId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedContactData),
      }
    );

    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du contact');
    }

    const data = await response.json();

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('age').value = '';

    displayContacts();
  } catch (error) {
    console.error(error);
  }
};
updateContactButton.addEventListener('click', updateContact);

displayContacts();

const openEditPage = async (contactId) => {
  selectedContactId = contactId;
  const selectedContact = await getContactById(contactId);
  console.log(selectedContact, 'selected');
  if (selectedContact) {
    document.getElementById('firstName').value = selectedContact.firstName;
    document.getElementById('lastName').value = selectedContact.lastName;
    document.getElementById('email').value = selectedContact.email;
    document.getElementById('address').value = selectedContact.address;
    document.getElementById('phone').value = selectedContact.phone;
    document.getElementById('age').value = selectedContact.age;
    document.getElementById('contactId').value = selectedContact.id;
  }
};

const deleteContact = async (contactId) => {
  const confirmed = window.confirm(
    'Voulez-vous vraiment supprimer ce contact ?'
  );
  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/contacts/${contactId}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression du contact');
    }

    console.log('Contact supprimé avec succès');

    displayContacts();
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async (contactId) => {
  return fetch(`http://localhost:3000/contacts/${contactId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du contact');
      }
      return response.json();
    })
    .then((contact) => {
      return contact;
    })
    .catch((error) => {
      console.error(error);
    });
};
