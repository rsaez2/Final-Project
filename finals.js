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
    <p> ${todoarry}</p>
    <input type="checkbox">
    <button class= "delete">x</button>
    </li>
    `);
    ul.innerHTML = list.join('');
})

const clear = document.querySelector("button.delete");
const check = document.querySelector("checkbox");
