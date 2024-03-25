const userService = require("../services/userService");

exports.signUp = (req, res, next) => {
  const { username, avatar } = req.body;

  userService
    .signUp(username, avatar)
    .then(() => res.status(201).send("Usuário cadastrado com sucesso"))
    .catch(next);
};
