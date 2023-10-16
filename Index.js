// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let total = 0;
 
function increment() {
    count++;
    total++;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    totalEl.textContent = total;
    console.log(count);
}

function reset() {
    count = 0;
    saveEl.textContent = "Previous Entries: ";
    countEl.textContent = count;
}