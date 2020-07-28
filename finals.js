let todo = "";
const todoarrys = []
const todoadd = document.querySelector("#newTodo")
const ul = document.querySelector("ul")

document.querySelector('form').addEventListener("submit",function(){
    event.preventDefault();
   
    todo = todoadd.value;
    todoarrys.push(todo)
    const list = todoarrys.map(todoarry => `
    <li>
    <input type="checkbox" class= "checked>
    <p for= "checkbox"> ${todoarry} </p>
    <button class= "clear">x</button>
    </li>
    `);
    ul.innerHTML = list.join('');
})

const clear = document.querySelector("button.delete");
const check = document.querySelector("checkbox");
const line = document.querySelector(".line")
const li = document.querySelector("li")

li.addEventListener("click", function(rTC){
    if(rTC.target.input === check){
        rTC.target.classList.toggle('checked'); 
    }  
}, false);

function dlt() {
    todoarray.splice(index, 1)
}


