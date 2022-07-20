const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.getAllUsers);
router.post("/create", userControllers.createUser);
router
  .delete("/:id", userControllers.deleteUser)
  .get("/:id", userControllers.getUser);

module.exports = router;
