const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./routes/user.routes"));
app.use("/groups", require("./routes/group.routes"));
app.use("/expenses", require("./routes/expense.routes"));
app.use("/balances", require("./routes/balance.routes"));

module.exports = app;
