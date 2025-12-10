const todoInput = getElements('todoInput');
const addTodoButton = getElements('addTodoBtn');
const todoList = getElements('todoList');
const clearAllButton = getElements('clearTodosBtn')
const currentDate = getElements('currentDate');
currentDate.innerText = new Date().toLocaleDateString();
const tasks = [];
function getElements(value = ''){
    return document.getElementById(value);
}
addTodoButton.addEventListener('click', function(){
    if(!todoInput.value){
        alert('atleast add a task');
    }
    else{
        const task = {
            id: Date.now(),
            name: todoInput.value,
            completed: false
        }
        tasks.push(task);
        todoInput.value = ''
    }
    renderTasks();
})

function renderTasks(){
    todoList.innerHTML = tasks.map(task => `<li>${task.name}</li>`).join('');
}
function clearAll(){
    tasks.length = 0;   
}

clearAllButton.addEventListener('click', function(){
    clearAll();
    renderTasks();
});
