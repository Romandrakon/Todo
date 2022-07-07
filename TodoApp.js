function init() {
  let todoList = document.querySelector('.basket-list'),
      btnAdd = document.querySelector('.btn-add'),
      clearAll = document.querySelector('.clear-all'),
      deleteBtn = document.querySelector('.delete-item'),
      doneBtn = document.querySelector('.success');
  
  function add() {
    let inputList = document.querySelector('.input-field').value;
    
    let listItem = document.createElement('li'),
        checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'check';

    if (inputList == "" ) {
      alert('Строка пустая, нечего добавлять')
    }else {
      todoList.appendChild(listItem);
      listItem.innerHTML = inputList;
      listItem.append(checkBox);
      localStorage.setItem('todos', todoList.innerHTML);
    }
    
  }

  function deleteItem() {
      const box = document.querySelectorAll('li input[type="checkbox"]:checked');
      box.forEach(item => item.closest('li').remove());
      localStorage.setItem('todos', todoList.innerHTML);
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

}

document.addEventListener('DOMContentLoaded', init)