const User = require('../model/user.model');
const { omit } = require('lodash');


async function createUser(input) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

function findUser(query) {
  return User.findOne(query).lean();
}

async function validatePassword(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}

module.exports = { createUser, findUser, validatePassword };
