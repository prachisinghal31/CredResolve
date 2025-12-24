const router = require("express").Router();
const { createGroup, getGroupById } = require("../controllers/group.controller");

router.post("/", createGroup);
router.get("/:groupId", getGroupById);

module.exports = router;
