const express = require("express");
const app = express();

app.use(express.json());

// ✅ define users properly
let users = [{ id: 1, name: "Harshu" }];

// GET
app.get("/users", (req, res) => {
  res.json(users);
});

// POST
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
