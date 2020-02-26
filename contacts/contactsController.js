const Contact = require('../model/contact');

const listContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      contacts,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const getById = (req, res) => {
  const contactId = req.params.contactId;

  Contact.findById(contactId)
    .then(contact => {
      if (!contact) {
        return res.status(404).json({
          contact: contact,
          message: 'Not found',
        });
      }
      res.status(200).json({
        contact: contact,
      });
    })
    .catch(error =>
      res.status(400).json({
        error: error,
      }),
    );
};

const addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: 'missing required name field',
      });
    }

    const newContact = new Contact({ name, email, phone });

    const readyNewContact = await newContact.save();
    res.status(201).json({
      contact: readyNewContact,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const removeContact = (req, res) => {
  const contactId = req.params.contactId;

  Contact.findByIdAndDelete(contactId).then(contact => {
    if (!contact) {
      return res.status(404).json({
        contact: contact,
        message: 'Not found',
      });
    }

    res
      .status(200)
      .json({
        message: 'Contact success deleted',
      })
      .catch(error => res.status(400).json({ error: error }));
  });
};

const updateContact = (req, res) => {
  const contactId = req.params.contactId;
  const { name, email, phone } = req.body;

  Contact.findByIdAndUpdate(
    contactId,
    {
      name,
      email,
      phone,
    },
    { new: true },
  )
    .then(contact => {
      if (!contact) {
        return res.status(404).json({ contact: contact });
      }
      res.json({ contact: contact });
    })
    .catch(error => {
      res.status(400).json({
        error: error,
      });
    });
};

module.exports = {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
};
