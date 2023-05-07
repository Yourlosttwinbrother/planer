let inputEl = document.getElementById('input');
let todosUl = document.getElementById('uraditi');

function loadTodos() {
todos.forEach(todo => addTodo(todo.text, todo.isCompleted))
}

inputEl. addEventListener("keyup", function(event){
if(event.code == 'Enter') {
     //alert("kliknuo si enter");
     addTodo(inputEl.value, false)
    }
});

function addTodo(todoText, zavrseno) {
    let todosEl = document.createElement('li');
    todosEl.innerText += todoText;

    if(zavrseno) {
      todosEl.classList.add('complete');
    }

    
    todosEl.addEventListener('click', (e) =>{
        clickedElement = e.target;
        clickedElement.classList.toggle('complete');
      updatelocalStorage();
   });
   todosEl.addEventListener('contextmenu', (e) =>{
    e.preventDefault();

   clickedElement = e.target
   clickedElement.remove();

   updatelocalStorage();
});

todosUl.appendChild(todosEl);
inputEl.value ="";

        updatelocalStorage();

        function updatelocalStorage() {
          todoEl = document.querySelectorAll('li');

          todos = [];

          todoEl.forEach(todoEl => {
            todo = {
              text : todoEl.innerText,
              isCompleted : todoEl.classList.contains('completed')
            }
          })
          todos.push(todo);

          localStorage.setItem('todo', JSON.stringify(todos));
        }
}