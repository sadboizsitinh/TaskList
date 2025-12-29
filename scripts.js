const addTrigger = document.getElementById("addTrigger");
const addForm = document.getElementById("addForm");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// mở form
addTrigger.addEventListener("click", () => {
    addForm.classList.remove("hidden");
    taskInput.focus();
});

// add task
addBtn.addEventListener("click", addTask);

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = " " + text;

    checkbox.addEventListener("change", () => {
        li.classList.toggle("done", checkbox.checked);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    // reset UI
    taskInput.value = "";
    addForm.classList.add("hidden");
}
