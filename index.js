const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get("/home", (req, res) => res.send("Welcome to the Home!!"));
app.post("/home", (req, res) => res.send("Post the Home data!!!"));
app.put("/home", (req, res) => res.json({learn:"Express",area:"Backend"}));
app.patch("/home", (req, res) => res.send("Patch the data!!"));

app.listen(PORT, () => console.log("Searver is Running"));
