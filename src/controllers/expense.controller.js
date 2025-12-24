const Expense = require("../models/Expense");
const { calculateSplits } = require("../utils/split.utils");
const { updateBalances } = require("../services/expense.service");
const Group = require("../models/Group");

exports.addExpense = async (req, res) => {
  const { groupId, paidBy, amount, splitType, splits } = req.body;

  const group = await Group.findById(groupId);
  const finalSplits = calculateSplits(
    amount,
    group.members,
    splitType,
    splits
  );

  const expense = await Expense.create({
    groupId,
    paidBy,
    amount,
    splitType,
    splits: finalSplits
  });

  await updateBalances(paidBy, finalSplits);

  res.json(expense);
};
