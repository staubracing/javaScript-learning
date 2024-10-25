// Project 4 API to get users from jsonplaceholder

const usersList = document.getElementById('usersList');
const searchInput = document.getElementById('searchInput');
const resultDiv = document.getElementById('result');

async function getUsersData() {
  const url = `https://jsonplaceholder.typicode.com/users`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

const users = re;
