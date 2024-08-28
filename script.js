const Taskbar = document.querySelector(".Taskbar");
let tasklist = document.querySelector(".tasklist");
let addBtn = document.getElementById("addBtn");
let input = document.getElementById("input");

addBtn.addEventListener("click", () => {
    if (input.value === '') {
        alert("You must write something")
    }
    else {
        let task = document.createElement('li');
        task.innerHTML = input.value;
        let button = document.createElement('button');
        button.setAttribute("id", "btn");
        button.innerHTML = "Remove";
        task.appendChild(button);
        tasklist.appendChild(task);
    }
    input.value = '';
    saveData();
})

tasklist.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    saveData();
})
function saveData() {
    localStorage.setItem("data", tasklist.innerHTML);
}
function showTask() {
    tasklist.innerHTML = localStorage.getItem("data");
}
showTask();




