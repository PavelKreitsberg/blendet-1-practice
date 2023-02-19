const router = require("express").Router();
const getAllUsersCtrl = require("../controllers/users/getAllUsers");
const loginCtrl = require("../controllers/users/login");
const registerCtrl = require("../controllers/users/register");
const logoutCtrl = require("../controllers/users/logout");

router.post("/login", loginCtrl);

router.post("/register", registerCtrl);

router.get("/logout", logoutCtrl);

router.get("/all-users", getAllUsersCtrl);

module.exports = router;
