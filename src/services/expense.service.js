const Balance = require("../models/Balance");

exports.updateBalances = async (paidBy, splits) => {
  for (let split of splits) {
    if (split.user.toString() === paidBy.toString()) continue;

    await Balance.findOneAndUpdate(
      { from: split.user, to: paidBy },
      { $inc: { amount: split.amount } },
      { upsert: true }
    );
  }
};
