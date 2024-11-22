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

function addNewTask() {
    if (INPUT.value.trim().length == 0) {
        return
    }

    addTask(INPUT.value);
    clearTextInput();
    showList(taskList);
}

function markTask() {
    
}

function deleteTask() {

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
        html += `<li id="${i}" class="task"><span class="undone">${list[i]} </span><span class="icon-trash"></span></li>`
    }
    OUTPUT.innerHTML = html;
}

function call(checkpoint) {
    alert('Succes! ' + checkpoint);
}