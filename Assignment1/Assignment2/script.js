function addTask() {

    // Get input value
    let input = document.getElementById("taskInput");
    let task = input.value;

    // Check if input is empty
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create new list item
    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">${task}</span>
        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    // Add task to list
    document.getElementById("taskList").appendChild(li);

    // Clear input box
    input.value = "";
}


// Mark task as completed
function completeTask(task) {
    task.classList.toggle("completed");
}


// Delete task
function deleteTask(button) {
    button.parentElement.remove();
}