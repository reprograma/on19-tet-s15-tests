const UserSchema = require("../models/userSchema");

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    return res.status(200).json(users)
  })
};

const createUser = async (req, res) => {
  try {
    const newUser = new UserSchema(req.body);

    const savedUser = await newUser.save();

    return res.status(201).send({
      "message": "User criado com sucesso",
      savedUser
    });
  } catch (e) {
    console.error(e);
  };
};


const deleteUserById = async (req, res) => {
  try {
    const userFound = await UserSchema.findById(req.params.id)

    await userFound.delete()

    return res.status(200).send({
      "mensagem": `Usuário '${userFound.email}' deletada com sucesso!`,
      userFound
    })

  } catch (err) {
    return res.status(400).send({
      "mensagem": err.message
    });
  };
};

module.exports = {
  getAll,
  createUser,
  deleteUserById
};