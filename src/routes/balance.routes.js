const router = require("express").Router();
const {
  getUserBalance,
  settleBalance,
  simplify
} = require("../controllers/balance.controller");

router.post("/settle", settleBalance);
router.post("/simplify", simplify);
router.get("/:userId", getUserBalance);


module.exports = router;
