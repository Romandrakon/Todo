function init() {
    const todoList = document.querySelector('.basket-list');
    const btnAdd = document.querySelector('.btn-add');
    const clearAll = document.querySelector('.clear-all');
    const deleteBtn = document.querySelector('.delete-item');
    const doneBtn = document.querySelector('.success');
      
    
    function add() {
      const inputList = document.querySelector('.input-field').value.trim();
      const listItem = document.createElement('li');
      const check = document.createElement('input');
            check.type = 'checkbox';
            check.className = 'check';

      if (inputList == "" ) {
        alert('Строка пустая, нечего добавлять')
      }else {
        todoList.append(listItem);
        listItem.innerText = inputList;
        listItem.append(check);
        localStorage.setItem('todos', todoList.innerHTML);
      }
      
    }

    function deleteItem() {
        const box = document.querySelectorAll('li input[type="checkbox"]:checked');

        if(box.length == 0) {
            return
        }else {

            box.forEach(item => item.closest('li').remove());
        localStorage.setItem('todos', todoList.innerHTML);
         }

    }

    function done() {
      const box = document.querySelectorAll('li input[type="checkbox"]:checked');

      if(box.length == 0) {
        return
      }else {
        box.forEach(item => {
          item.closest('li').classList.toggle('done');
          item.checked = false;
        })
      }
    }

    function clearLocal() {
        todoList.innerHTML = '';
        localStorage.clear();
       
    }
        
    function loadLocal() {

    const data = localStorage.getItem('todos');

        if(data) {
        todoList.innerHTML = data;
        }

    }

    loadLocal();

    btnAdd.addEventListener('click', add);
    clearAll.addEventListener('click', clearLocal);
    deleteBtn.addEventListener('click', deleteItem);
    doneBtn.addEventListener('click', done)

  }
  
  document.addEventListener('DOMContentLoaded', init)