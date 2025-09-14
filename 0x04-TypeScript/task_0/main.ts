// task_0/js/main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Samuel",
  lastName: "Adikah",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 20,
  location: "Mombasa",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table in Vanilla JS
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

// Create header row
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);
tableHead.appendChild(headerRow);

// Loop through students and create rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

// Append table to body
table.appendChild(tableHead);
table.appendChild(tableBody);
document.body.appendChild(table);
