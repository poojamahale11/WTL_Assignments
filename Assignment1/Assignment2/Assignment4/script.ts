interface Task {
    id: number;
    name: string;
    completed: boolean;
}

let tasks: Task[] = [];

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addButton = document.getElementById("addButton") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLDivElement;
const totalTasks = document.getElementById("totalTasks") as HTMLElement;
const completedTasks = document.getElementById("completedTasks") as HTMLElement;

function addTask(): void {

    const name: string = taskInput.value.trim();

    if (name === "") {
        alert("Please enter a task");
        return;
    }

    const task: Task = {
        id: Date.now(),
        name: name,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";

    displayTasks();
}

function displayTasks(): void {

    taskList.innerHTML = "";

    tasks.forEach((task: Task) => {

        const div = document.createElement("div");
        div.className = "task";

        const span = document.createElement("span");
        span.className = "task-name";
        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.addEventListener("click", () => {
            toggleTask(task.id);
        });

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.className = "delete";

        button.addEventListener("click", () => {
            deleteTask(task.id);
        });

        div.appendChild(span);
        div.appendChild(button);

        taskList.appendChild(div);
    });

    updateCounter();
}

function toggleTask(id: number): void {

    const task = tasks.find((t: Task) => t.id === id);

    if (task) {
        task.completed = !task.completed;
    }

    displayTasks();
}

function deleteTask(id: number): void {

    tasks = tasks.filter((t: Task) => t.id !== id);

    displayTasks();
}

function updateCounter(): void {

    totalTasks.textContent = tasks.length.toString();

    const completed: number =
        tasks.filter((t: Task) => t.completed).length;

    completedTasks.textContent = completed.toString();
}

addButton.addEventListener("click", addTask);