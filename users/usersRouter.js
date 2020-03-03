const {Router} = require ('express');
const {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
} = require ('./usersController');

const router = Router ();

router.get ('/', listContacts);

router.get ('/:contactId', getById);

router.post ('/', addContact);

router.delete ('/:contactId', removeContact);

router.patch ('/:contactId', updateContact);

module.exports = router;
