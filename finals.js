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

const checkbox = document.querySelector('.checked');
const style = document.querySelector('style')
const subbutt = document.querySelector(".extra")
const clear = document.querySelector("button.clear");
var boo = 0

checkbox.addEventListener('click', function(){
    if(check.checked){
        boo = 1
    } else{
        boo = 0
    }
})
subbutt.addEventListener('click', function(cTB){
    if(boo = 1){
        const line = `
            <style>
                label.line{
                    text-decoration-line: line-through = true
                }
            </style>
        `
        style.innerHTML = line;
    }else{

    }

})

clear.addEventListener('click', function(){
        event.preventDefault();
        delete todoarray[1]
})


