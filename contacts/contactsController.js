const shortid = require('shortid');
const fs = require('fs');

const contacts = JSON.parse(
  fs.readFileSync('./db/contacts.json', { encoding: 'utf-8' }),
);

const listContacts = (req, res) => {
  res.status(200).json({
    contacts,
  });
};

const getById = (req, res) => {
  const contactId = req.params.contactId;

  const getContactById = contacts.filter(
    contact => contact.id === Number(contactId),
  );

  const isValidContactId = contacts.some(
    contact => contact.id === Number(contactId),
  );

  if (isValidContactId === false) {
    return res.status(404).json({
      message: 'Not found',
    });
  }

  res.status(200).json({
    contacts: getContactById,
  });
};

const addContact = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      message: 'missing required name field',
    });
  }

  const newContact = {
    id: shortid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  res.status(201).json(newContact);
};

const removeContact = (req, res) => {
  const contactId = req.params.contactId;

  const isValidContactId = contacts.some(
    contact => contact.id === Number(contactId),
  );

  if (isValidContactId === false) {
    return res.status(404).json({
      meassage: 'Not found',
    });
  }

  deletedContact = contacts.filter(contact => contact.id !== Number(contactId));

  res.status(200).json({
    message: `Contact ${contactId} deleted `,
  });
};

const updateContact = (req, res) => {
  const contactId = req.params.contactId;
  const { name, email, phone } = req.body;

  const updatedContacts = contacts.map(contact => {
    if (contact.id === Number(contactId)) {
      contact.name = name;
      contact.email = email;
      contact.phone = phone;

      return contact;
    }
    return contact;
  });

  res.status(200).json(updatedContacts);
};

module.exports = {
  contacts,
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
};
