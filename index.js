//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption =document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener("click",filterTodo);

//Fuctions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check MARK Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fa fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Check TRASH Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fa fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append (created DIV) to LIST
    todoList.appendChild(todoDiv);
    //CLEAR TODO INPUT Value
    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
           todo.remove(); 
        });        
    }

    //CHECK MARK TODO
    if(item.classList[0] === "complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display ='flex';
                break;
            case "Completed":
            if(todo.classList.contains("completed")){
                todo.style.display ='flex';
            }else {
                todo.style.display ='none';
            }
            break;
            case "UnCompleted":
            if(!todo.classList.contains("completed")){
                 todo.style.display ='flex';
            }else {
                todo.style.display ='none';
            }
            break;    
        }
    });
}

