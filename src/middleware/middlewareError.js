exports.handleError = (err, req, res, next) => {
  console.error(err);
  res.status(500).send("Erro interno do servidor");
};
