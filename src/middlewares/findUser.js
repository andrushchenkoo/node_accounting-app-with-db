const userModel = require('../models/userModel');

const findUser = async (req, res, next) => {
  const userId = Number(req.params.id);
  const user = await userModel.getUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not Found' });
  }
  req.user = user;
  next();
};

module.exports = { findUser };
