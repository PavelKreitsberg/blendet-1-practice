const router = require("express").Router();
const getAllUsersCtrl = require("../controllers/users/getAllUsers");
const loginCtrl = require("../controllers/users/loginCtrl");
const registerCtrl = require("../controllers/users/registerCtrl");
const logoutCtrl = require("../controllers/users/logoutCtrl");

router.post("/login", loginCtrl);

router.post("/register", registerCtrl);

router.get("/logout", logoutCtrl);

router.get("/all-users", getAllUsersCtrl);

module.exports = router;
