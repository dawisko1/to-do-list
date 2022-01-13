// ELEMENTS
const tasksContainer = document.querySelector(".tasks-container");

const addNewCardBtn = document.querySelector(".create-new-list-btn");
addNewCardBtn.addEventListener('click', addNewCard)
addNewCardBtn.addEventListener('click', works)



// FUNCTIONS
function works() {
    console.log('działa')
}
function addNewCard() {
    const newCard = document.createElement('form')
newCard.classList.add('new-card');

const newTaskInput = document.createElement('div');
newTaskInput.classList.add('new-task-input');

const wholeLabel = document.createElement('div');
wholeLabel.classList.add('whole-label')

const taskInput = document.createElement('input');
taskInput.setAttribute('name', 'new-task');
taskInput.setAttribute('autocomplete', 'off');
taskInput.setAttribute('type', 'text');

const taskLabel = document.createElement('label');
taskLabel.setAttribute('for', 'new-task');
taskLabel.classList.add('new-task-label')

const labelSpan = document.createElement('span');
labelSpan.innerText = "What are we gonna do?";
labelSpan.classList.add('new-task-content');

const addTaskDiv = document.createElement('div');
addTaskDiv.setAttribute('style', 'pointer-events: none;')
addTaskDiv.classList.add('add-task');


var submitNewTaskBtn = document.createElement('button');
submitNewTaskBtn.setAttribute('for', 'new-task');
submitNewTaskBtn.innerText = "Add";
addTaskBtns.push(submitNewTaskBtn);


const addIcon = document.createElement('i');
addIcon.classList.add('fas', 'fa-plus');

const tasksList = document.createElement('ul');

//--------------------------

tasksContainer.appendChild(newCard);
newCard.appendChild(newTaskInput);
newTaskInput.appendChild(wholeLabel);
wholeLabel.appendChild(taskInput);
wholeLabel.appendChild(taskLabel);
taskLabel.appendChild(labelSpan);
newTaskInput.appendChild(addTaskDiv);
addTaskDiv.appendChild(submitNewTaskBtn);
addTaskDiv.appendChild(addIcon);
newCard.appendChild(tasksList);

    
};

const myLabels = document.getElementsByClassName('new-task-content');

let addTaskBtns = [];

addTaskBtns.forEach((i) => {
    console.log(works);
})

