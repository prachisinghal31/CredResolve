const Balance = require("../models/Balance");

/**
 * Simplify balances using net flow method
 */
exports.simplifyBalances = async () => {
  const balances = await Balance.find();

  const net = {};

  balances.forEach(b => {
    net[b.from] = (net[b.from] || 0) - b.amount;
    net[b.to] = (net[b.to] || 0) + b.amount;
  });

  const debtors = [];
  const creditors = [];

  for (let user in net) {
    if (net[user] < 0) debtors.push({ user, amount: -net[user] });
    if (net[user] > 0) creditors.push({ user, amount: net[user] });
  }

  const simplified = [];

  let i = 0, j = 0;
  while (i < debtors.length && j < creditors.length) {
    const pay = Math.min(debtors[i].amount, creditors[j].amount);

    simplified.push({
      from: debtors[i].user,
      to: creditors[j].user,
      amount: pay
    });

    debtors[i].amount -= pay;
    creditors[j].amount -= pay;

    if (debtors[i].amount === 0) i++;
    if (creditors[j].amount === 0) j++;
  }

  await Balance.deleteMany({});
  await Balance.insertMany(simplified);

  return simplified;
};
