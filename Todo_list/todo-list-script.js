const INPUT = document.querySelector('#text-input');
const INPUT_BTN = document.querySelector('#input-btn');
const OUTPUT = document.querySelector('#output');


INPUT_BTN.addEventListener('click', () => addNewTask());
INPUT.addEventListener('keyup', () => {
    if (event.key == "Enter") {
        addNewTask()
    }
})

let taskList = [];

run()

function run() {
    addListeners();
}

function addNewTask() {
    if (INPUT.value.trim().length == 0) {
        return
    }

    addTask(INPUT.value);
    clearTextInput();
    showList(taskList);
    addListeners();
}

function markTask(task) {
    task.firstElementChild.classList.toggle('done');
}

function deleteTask(task) {
    let taskId = task.parentElement.id;
    taskList.splice(taskId, 1);
    showList(taskList);
    addListeners();
}

function addTask(task) {    
    taskList.push(task);
}

function clearTextInput() {
    INPUT.value = "";
}

function showList(list) {
    let html = "";
    for (i=0; i < list.length; i++) {
        html += `
        <li id="${i}" class="task">
            <span class="undone">${list[i]} </span>
            <span id="deleteBtn" class="icon-trash">
        </span></li>`
    }
    OUTPUT.innerHTML = html;
}

function addListeners() {
    const TASK_LIST = document.getElementsByClassName('task');
    for (i=0; i < TASK_LIST.length; i++) {
        let task = TASK_LIST[i];
        task.addEventListener('click', () => markTask(task));
    }
    const DELETE_LIST = document.getElementsByClassName('icon-trash');
    for (i=0; i < DELETE_LIST.length; i++) {
        let task = DELETE_LIST[i];
        task.addEventListener('click', () => deleteTask(task));
    }
}

//debugging
function call(checkpoint) {
    alert('Succes! ' + checkpoint);
}