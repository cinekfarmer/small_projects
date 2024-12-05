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

loadLocalSave();

run();

function run() {
    addListeners();
}

function addNewTask() {
    if (INPUT.value.trim().length == 0) {
        return
    }

    addTask(INPUT.value);
    saveLocally(taskList);
    clearTextInput();
    showList(taskList);
    addListeners();
}

function deleteTask(taskElement) {
    taskList.splice(taskElement.parentElement.id, 1);
    saveLocally(taskList)
    showList(taskList);
    addListeners();
}

function markTask(task) {
    task.firstElementChild.classList.toggle('done');
    taskList[task.id].isComplited = taskList[task.id].isComplited ? false : true;
    call(task.id);
}

function addTask(newTask) {    
    taskList.push({
        name: newTask,
        isComplited: false
    });
}

function clearTextInput() {
    INPUT.value = "";
}

function showList(list) {
    let html = "";
    for (i=0; i < list.length; i++) {
        let classStatus = list[i].isComplited ? 'done' : '';
        html += `
        <li id="${i}" class="task">
            <span class="${classStatus}">${list[i].name} </span>
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

function saveLocally(list) {
    localStorage.setItem('list', JSON.stringify(list));
}

function loadLocalSave() {
    taskList = JSON.parse(localStorage.getItem('list'));
    showList(taskList);
    addListeners();
}

//debugging
function call(checkpoint) {
    alert('Succes! ' + checkpoint);
}