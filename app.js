let button = document.getElementById('add')
let todoList = document.getElementById('todolist')
let input = document.getElementById('input');

let todos = [];
window.onload = ()=>{
   todos = JSON.parse(localStorage.getItem('todos')) || []
   todos.foreach(todo=>addtodo(todo))
}
button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todoss',JSON.stringify(todos))
    addtodo(input.value)
    input.value = ''
})

function addtodo(todo){
      let para = document.createElement('p');
       para.innerText = todo;
       todoList.appendChild(para)
       para.addEventListener('click',()=>{
       para.style.textDecoration = 'line-through'
       remove(todo)
       })
       para.addEventListener('click',()=>{
        todoList.removeChild(para)
        remove(todo)
        })
}

function todo(todo){
  let index = todos.indexOf(todo)
  if(index>-1){
       todos.splice(index,1)
}
       localStorage.setItem('todoss',JSON.stringify(todos))
}