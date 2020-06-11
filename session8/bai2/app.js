// Bài 2: Tạo To Do List

const mainForm = document.getElementById("main-form")
const ul = document.getElementById("content")
mainForm .addEventListener("submit",onSubmitEvent)
function onSubmitEvent(event){
    event.preventDefault()
    const content = mainForm.todo.value
    const li = document.createElement("li")
    li.innerHTML = `${content} <button id="delete">delete</button>` 
    ul.appendChild(li)
}

ul.addEventListener("click", onDeleteTodo)
function onDeleteTodo(event){
    if(event.target.id === "delete"){
        event.target.parentNode.remove()
    }
}