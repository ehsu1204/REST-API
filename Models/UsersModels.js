const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requirded: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});
//Important to keep in mind "Users" as that is the keyword when connecting to mongoDB
module.exports = mongoose.model("Users", UserSchema);
