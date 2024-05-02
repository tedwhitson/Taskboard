const taskNameInputEl = $('#task-name-input');
const taskTypeInputEl = $('#task-type-input');
const taskDateInputEl = $('#taskDueDate');

// Retrieve tasks and nextId from localStorage
function readTasksFromStorage () {
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = [];
    }
    return tasks;
}

function readNextIdFromStorage () {
    let nextId = JSON.parse(localStorage.getItem("nextId"));
    return nextId;
}
    
function saveTasksToStorage () {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


// Todo: create a function to generate a unique task id
function generateTaskId() {

function readTaskIdFromStorage () {
    let taskId = JSON.parse(localStorage.getItem("taskId"));
    return taskId;
}
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>').addClass('card task-card draggable my-3').attr('data-task-id', task.id);
    const cardHeader = $('<div>').addClass('card-header h4').text(task.name);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.type);
    const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
    const cardDeleteBtn = $('<button>').addClass('btn btn-danger delete').text('Delete').attr('data-task-id', task.id);
    cardDeleteBtn.on('click', handleDeleteTask);
  
      if (task.dueDate && task.status !== 'done') {
      const now = dayjs();
      const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
  
      if (now.isSame(taskDueDate, 'day')) {
        taskCard.addClass('bg-warning text-white');
      } else if (now.isAfter(taskDueDate)) {
        taskCard.addClass('bg-danger text-white');
        cardDeleteBtn.addClass('border-light');
      }
    }
  
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);
  
    return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    const taskName = taskNameInputEl.val().trim();
    const taskType = taskTypeInputEl.val();
    const taskDate = taskDateInputEl.val();
  
    const newTask = {
      id: crypto.randomUUID(),
      name: taskName,
      type: taskType,
      dueDate: taskDate,
      status: 'to-do',
    };
  
    const tasks = readTasksFromStorage();
    tasks.push(newTask);
  
    saveTasksToStorage(tasks);
  
    renderTaskList();
  
    taskNameInputEl.val('');
    taskTypeInputEl.val('');
    taskDateInputEl.val('');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

