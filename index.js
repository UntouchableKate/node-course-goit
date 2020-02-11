const express = require('express');
const morgan = require('morgan');
var cors = require('cors');

const contactsRoutes = require('./contacts/contactsRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contacts', contactsRoutes);

app.use((err, req, res) => {
  res.status(500).json(err);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
