exports.calculateSplits = (amount, members, splitType, splits) => {
  if (splitType === "EQUAL") {
    const share = amount / members.length;
    return members.map(m => ({ user: m, amount: share }));
  }

  if (splitType === "EXACT") {
    return splits;
  }

  if (splitType === "PERCENT") {
    return splits.map(s => ({
      user: s.user,
      amount: (s.amount / 100) * amount
    }));
  }
};
