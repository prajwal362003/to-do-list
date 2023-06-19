// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  
  const li = document.createElement("li");
  li.innerText = taskText;

  // Strike the task when clicked
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Delete the task on double click
  li.addEventListener("dblclick", function () {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}

// Event listeners
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
