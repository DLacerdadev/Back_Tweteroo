const userService = require("../services/userService");

exports.signUp = (req, res, next) => {
  try {
    const { username, avatar } = req.body;

    userService
      .signUp(username, avatar)
      .then(() => res.status(201).send("Usuário cadastrado com sucesso"))
      .catch(next);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
