const todoInputElem =document.querySelector('.todo-input')
const todoList = document.querySelector('.todolist')


// delete  space
function trim(val){
    return val.trim()
}

function toLowerCase(val){
    return val.toLowerCase()
}
function insertTodo(todoVal){
    return '<li>' + todoVal + '</li>'

}

function addTodo(event){

    // console.log(event);
    if(event.charCode === 13){
       
        todoList.insertAdjacentHTML('beforeend', insertTodo(toLowerCase(trim(todoInputElem.value))))
        todoInputElem.value=''
                 
    }
}


todoInputElem.addEventListener('keypress', addTodo)