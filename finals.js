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
    <input type="checkbox" class= "checked">
    <lable for= "checked"> <a class= "line">${todoarry}</a></lable>
    <button class= "clear">x</button>
    <button type= "submit" class= "extra">Submit</button>
    </li>
    `);
    ul.innerHTML = list.join('');
})



})

clear.addEventListener('click', function(){
        event.preventDefault();
        delete todoarray[1]
})


