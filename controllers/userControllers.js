const User = require("./../Models/UsersModels");

//Getting All Users
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json({ message: "success", allUsers });
  } catch (err) {
    res.json({ message: err });
  }
};
//Creating Users
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    res.json({ message: "success", newUser });
  } catch (err) {
    res.json({ message: err });
  }
};

// Get Specific User
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

//Deleting User

exports.deleteUser = async (req, res) => {
  const User = await UsersModels.findByIdAndDelete(req.params.id);
  try {
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: err });
  }
};
