let users = [];

exports.signUp = (username, avatar) => {
  return new Promise((resolve, reject) => {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return reject("Usuário já existe");
    }

    const newUser = { username, avatar };
    users.push(newUser);
    resolve();
  });
};
