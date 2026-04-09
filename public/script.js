let students = [];

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;

  students.push({ name, roll });

  displayStudents();
});

function displayStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    let li = document.createElement("li");
    li.textContent = student.name + " (Roll: " + student.roll + ")";
    list.appendChild(li);
  });
}
