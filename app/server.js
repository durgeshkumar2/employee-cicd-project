const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

let employees = [
  { id: 1, name: "Rahul", role: "DevOps Engineer" },
  { id: 2, name: "Aman", role: "Backend Developer" }
];

// Health Check Endpoint
app.get("/", (req, res) => {
  res.send("Employee API Running...");
});

// Get Employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Add Employee
app.post("/employees", (req, res) => {
  const employee = {
    id: employees.length + 1,
    name: req.body.name,
    role: req.body.role
  };

  employees.push(employee);

  res.status(201).json(employee);
});

// Delete Employee
app.delete("/employees/:id", (req, res) => {
  employees = employees.filter(
    emp => emp.id !== parseInt(req.params.id)
  );

  res.json({
    message: "Employee deleted"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});