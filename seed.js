require('dotenv').config();
require('./config/database');

const User = require('./models/user');

// IIFE - Immediately Invoked Function Expression
(async function() {

  await User.create([
    {name: 'Ali Selim', email: `${process.env.EMAIL}`, password: `${process.env.PASSWORD}`}
  ]);

  process.exit();

})();