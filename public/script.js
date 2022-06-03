// Planner reference code from tutorial content (Mostly from Week 9)

// Planner(Task Manager)
// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")

// Selector for the tasklist output
var tasklist = document.querySelector("#tasklist > ul");

// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
var urgencyInput = document.getElementById("urgencyInput");



// count function variables
var upperRight = 0;
var upperLeft = 0;
var lowerLeft = 0;
var lowerRight = 0;



// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    let urgencyRating = urgencyInput.options[urgencyInput.selectedIndex].value;
    if (task) {
        addTask(task, dueDate, estimatedTime, priorityRating, urgencyRating, completionTime, false);
    }
})

// Create global array to track tasks
var taskListArray = [];

// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, urgencyRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        completionTime,
        priorityRating,
        urgencyRating,
        estimatedTime,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);

    countTask(task);
}

// Function to display task on screen
function renderTask(task) {

    //Local storage
    localStorage.setItem('taskListArray', JSON.stringify(taskListArray));

    // Call function - checks if a task has been added
    updateEmpty();

    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute('data-id', task.id);
    item.innerHTML = "<p>" + task.taskDescription + "</p>";

    tasklist.appendChild(item);

    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);


    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray, index)
        console.log(taskListArray);
        updateEmpty();
        item.remove();
    })

    // Clear the input form
    form.reset();
}



function countTask(task) {
    //Count the number of 'High' in the task array
        for (i = 0; i < task.length; i++) {
            var count = 0;
            if (task[i] == 'High') {
                count++;
            }
        }  
    //Urgency and Priority both High
        if (count == 2) {
            upperRight++;
        }
    //Urgency and Priority both Low
        if (count == 0) {
            lowerLeft++;
        }
    //Urgency or Priority High (only one of them)
        if (count == 1) {
    //Priority High, Urgency Low
            if (task[7] == 'High') {
                upperLeft++;
            } 
    //Priority Low, Urgency High
            else {
                lowerRight++;
            }
        }
    }



// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


// Function to hide the 'you haven't added any tasks' text
function updateEmpty() {
    if (taskListArray.length > 0) {
        document.getElementById('emptyList').style.display = 'none';
    } else {
        document.getElementById('emptyList').style.display = 'block';
    }
}


//Array.filter(priorityRating => priorityRating == 'High', urgencyRating => urgencyRating == 'High').length