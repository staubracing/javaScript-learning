// Project 3. Display the information of the objects in the array in a list and add a search input to filter the objects in the array by what is typed in the input field

let employees = [
  {
    name: 'Chris',
    age: 52,
    sex: 'male',
    occupation: 'Mfg Engineer',
    email: 'chris@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/2.jpg',
  },
  {
    name: 'Joe',
    age: 40,
    sex: 'male',
    occupation: 'Software Engineer, Gay Bar stripper by night',
    email: 'joe@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/0.jpg',
  },
  {
    name: 'Reed',
    age: 28,
    sex: 'male',
    occupation: 'Network Engineer',
    email: 'reed@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/6.jpg',
  },
];

const employeeList = document.getElementById('employeeList');

if (employeeList) {
  employees.forEach((employee) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${employee.image}" alt="${employee.name}" style="width:50px;height:50px;border-radius:50%;margin-right:10px;">
      <span>Name: ${employee.name}  Occupation: ${employee.occupation} -- Age: ${employee.age}  Sex: ${employee.sex}</span>`;
    employeeList.appendChild(listItem);
  });
} else {
  console.error("Element with id 'employeeList' not found.");
}

// Add a search input to the HTML:
console.log('searchInput');
const searchInput = document.getElementById('searchInput');
console.log('searchInput', searchInput);
const resultDiv = document.getElementById('result');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const matchingEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.occupation.toLowerCase().includes(searchTerm) ||
      employee.age.toString().includes(searchTerm) ||
      employee.sex.toLowerCase().includes(searchTerm)
    );
  });

  resultDiv.innerHTML = '';

  if (matchingEmployees.length > 0) {
    matchingEmployees.forEach((employee) => {
      resultDiv.innerHTML += `<p>Name: ${employee.name}, Occupation: ${employee.occupation}, Age: ${employee.age}, Sex: ${employee.sex}</p>`;
    });
  } else {
    resultDiv.innerHTML = '<p>No results found.</p>';
  }
});
