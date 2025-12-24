const router = require("express").Router();
const { addExpense } = require("../controllers/expense.controller");

router.post("/", addExpense);

module.exports = router;
