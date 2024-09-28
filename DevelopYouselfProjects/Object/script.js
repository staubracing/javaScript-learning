let employees = [
  {
    name: "Chris",
    age: 52,
    sex: "male",
    occupation: "Mfg Engineer",
  },
  {
    name: "Joe",
    age: 40,
    sex: "male",
    occupation: "Software Engineer",
  },
  {
    name: "Reed",
    age: 28,
    sex: "male",
    occupation: "Network Engineer",
  },
];

const employeeList = document.getElementById("employeeList");

employees.forEach((employee) => {
  const listItem = document.createElement("li");
  listItem.textContent = `Name: ${employee.name}  Occupation: ${employee.occupation}  Age: ${employee.age}  Sex: ${employee.sex}`;
  employeeList.appendChild(listItem);
});
