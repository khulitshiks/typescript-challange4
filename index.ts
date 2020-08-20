// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let student = {
Name:"Khuliso",
Surname:"Tshikalange",
Age:18,
Grade:8
}
let entries = Object.entries(student);
console.log("entries",entries);

 


