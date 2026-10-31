"use strict";
// Interface for Task
// Array to store tasks
let tasks = [];
// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
// Add Task
function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        alert("Please enter a task.");
        return;
    }
    const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";
    displayTasks();
}
// Display Tasks
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `
            <span
                class="task-name ${task.completed ? "completed" : ""}"
                onclick="toggleTask(${task.id})"
            >
                ${task.name}
            </span>

            <button
                class="delete"
                onclick="deleteTask(${task.id})"
            >
                Delete
            </button>
        `;
        taskList.appendChild(taskDiv);
    });
    updateCounter();
}
// Complete / Uncomplete Task
function toggleTask(id) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.completed = !task.completed;
    }
    displayTasks();
}
// Delete Task
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    displayTasks();
}
// Update Counters
function updateCounter() {
    totalTasks.innerText =
        tasks.length.toString();
    const completed = tasks.filter((task) => task.completed).length;
    completedTasks.innerText =
        completed.toString();
}
// Button Event
addButton.addEventListener("click", addTask);
