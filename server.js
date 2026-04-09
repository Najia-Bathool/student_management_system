const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let students = [];

if (fs.existsSync("students.json")) {
  const data = fs.readFileSync("students.json");
  students = data.length ? JSON.parse(data) : [];
}

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const student = req.body;
  students.push(student);

  fs.writeFileSync("students.json", JSON.stringify(students));

  res.json({ message: "Student added" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running...");
});
