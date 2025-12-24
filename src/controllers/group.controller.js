const Group = require("../models/Group");

exports.createGroup = async (req, res) => {
  const { name, members } = req.body;

  const group = await Group.create({
    name,
    members
  });

  res.json(group);
};

exports.getGroupById = async (req, res) => {
  const group = await Group.findById(req.params.groupId)
    .populate("members");
  res.json(group);
};
