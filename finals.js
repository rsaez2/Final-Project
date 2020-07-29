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
    <button type="submit" id= "clear">x</button>
    </li>
    `);
    ul.innerHTML = list.join('');
})

const cb = document.querySelector('.checked');
const style = document.createElement('style')
const head = document.querySelector('head')
const clear = document.querySelector("#clear");
var boo = 0

cb.addEventListener("click", function(event){
    console.log(event);
    if(check.checked){
        boo === true
    } else{
        boo === false
    }
})
if(boo === true){
        const line = `
            <style>
                a.line{
                    text-decoration: line-through = true
                    
                }
            </style>
        `
        head.innerHTML = line;
    }else{

     }

clear.addEventListener("submit", function(event){
        event.preventDefault();
    const gone =`
        <style>
            a.line{
                visibility: hidden
            }
        </style>
    `
    style.innerHTML = gone;
})


