const { User } = require("../models");

class UserController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.json({
      user,
      token: user.generateToken()
    });
  }

  async create(req, res) {
    return User.create(req.body)
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(400).send(error))
  }

}

module.exports = new UserController();
