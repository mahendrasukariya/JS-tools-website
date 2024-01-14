// Age Finder javascrit

let currentDate = document.querySelector('.add-cu-date-input');
let brithdayDate = document.querySelector('.add-br-date-input');

let ageFindBtn = document.querySelector('.find-age-btn');
let resultBox = document.querySelector('.age-result-box');

function findAge() {
    let myCurrentAge = new Date(currentDate.value);

    let d1 = myCurrentAge.getDate();
    let m1 = myCurrentAge.getMonth() +1;
    let y1 = myCurrentAge.getFullYear();

    let myOldAge = new Date(brithdayDate.value);

    let d2 = myOldAge.getDate();
    let m2 = myOldAge.getMonth() + 1;
    let y2 = myOldAge.getFullYear();

    let d3,m3,y3;

   if (d1>d2) {
    d3 = d1 - d2
    
   } if (m1>m2) {
    m3 = m1 - m2
    
   } else {
    y3 = y1 - y2
   }


    

    // finalResultBox = document.createElement('h1');
    resultBox.innerHTML = `<h1 class="mahendra" > Day ${d3} Month ${m3} Year ${y3}</h1> `;

};

ageFindBtn.addEventListener('click', event => {
    // event.preventDefault();
    findAge();
});



// TODO List JavaScript
const addTasksInput = document.querySelector('.add-tasks-input');
const addTasksBtn = document.querySelector('.add-tasks-btn');
const form = document.querySelector('.todo-main-head');
const todoTaskBox = document.querySelector('.todo-task-box');
const deleteTasksBtn = document.querySelector('.delete-tasks-btn');

let todos = [];

function addTodo() {
    const todoText = addTasksInput.value.trim();

    if (todoText.length > 0) {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };

        todos.push(todo);

        addTasksInput.value = '';

        renderTodos();
    }
}

function toggleComleted(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }

        return todo;

    });

    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    renderTodos();
}


function renderTodos() {
    todoTaskBox.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        // const todocheck = document.createElement('input');
        const todoText = document.createElement('span');
        const todoDeleteButton = document.createElement('button');

        todoText.textContent = todo.text;
        todoDeleteButton.textContent = 'Delete';

        todoDeleteButton.addEventListener('click', () => deleteTodo(todo.id));

        if (todo.completed) {
            todoItem.classList.add('completed');
        }

        todoItem.addEventListener('click', () => toggleComleted(todo.id));
        // todoItem.appendChild(todocheck);
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoDeleteButton);

        todoTaskBox.appendChild(todoItem);



    });
}

form.addEventListener('click', event => {
    // event.preventDefault();
    addTodo();
});

renderTodos();







// Calculater JavaScript

const calculterDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


let firstValue = 0;
let opretersValue = '';
let awitingNextValue = false;

function sendNumberValue(number) {
    if (awitingNextValue) {
        calculterDisplay.textContent = number;
        awitingNextValue = false;
    } else {
        const displayValue = calculterDisplay.textContent;
        calculterDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    if (awitingNextValue) return;

    if (!calculterDisplay.textContent.includes('.')) {
        calculterDisplay.textContent = `${calculterDisplay.textContent}.`;
    }
}


const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

    '=': (firstNumber, secondNumber) => firstNumber = secondNumber,



};

function useOperator(operator) {
    const currentValue = Number(calculterDisplay.textContent);

    if (opretersValue && awitingNextValue) {
        opretersValue = operator;
        return;
    }

    if (!firstValue) {
        firstValue = currentValue;
    } else {
        const calculation = calculate[opretersValue](firstValue, currentValue);
        calculterDisplay.textContent = calculation;
        firstValue = calculation;
    }

    awitingNextValue = true;
    opretersValue = operator;
}

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if
        (inputBtn.classList.contains('opraters')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if
        (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }

});

function resetAll() {
    firstValue = 0;
    opretersValue = '';
    awitingNextValue = false;
    calculterDisplay.textContent = '0';
}

clearBtn.addEventListener('click', resetAll);














//  extra code

// Api Calls

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();

// });


// async function instagramDown() {
//     const apiUrl = 'www.instagram.com/sukariyaji19'

//     try {
//         const response = await fetch(apiUrl);
//         apidDown = await response.json();
//     } catch (error) {
//         console.log('gone')
//     }
// }

// instagramDown();