const User = require('../model/user.model');

async function createUser(input) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

function findUser() {}

module.exports = { createUser, findUser};
