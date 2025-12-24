const Balance = require("../models/Balance");
const { simplifyBalances } = require("../services/balance.service");

exports.getUserBalance = async (req, res) => {
  const userId = req.params.userId;

  const owes = await Balance.find({ from: userId });
  const gets = await Balance.find({ to: userId });

  res.json({ owes, gets });
};

exports.settleBalance = async (req, res) => {
  const { from, to, amount } = req.body;

  await Balance.findOneAndUpdate(
    { from, to },
    { $inc: { amount: -amount } }
  );

  res.json({ message: "Settlement successful" });
};

exports.simplify = async (req, res) => {
  const simplified = await simplifyBalances();
  res.json(simplified);
};
