const todoList = document.querySelector('.todo_list');
const todoListItems = document.querySelectorAll('li');

const buttons = document.querySelectorAll('button');

const box = document.querySelector('.box');

// console.log(Array.from(todoList.children));
// Array.from(todoList.children).forEach((item) => {
//   item.textContent = `${item.textContent} - Finished`;
//   //   console.log(item.textContent);
// });

const createTodoListItem = () => {
  const li = document.createElement('li');
  //   li.textContent = 'New Item';
  const span = document.createElement('span');
  span.textContent = 'Item';
  const button = document.createElement('button');
  button.textContent = 'remove item';
  button.addEventListener('click', (e) => e.target.parentElement.remove());
  li.appendChild(span);
  li.appendChild(button);
  todoList.prepend(li);
};

const removeTodoListItem = (t) => t.remove();
document.querySelector('body').addEventListener('click', (e) => {
  //   createTodoListItem();
  console.log('Body clicked');
});
// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     //   createTodoListItem();
//     console.log('Buuton clicked', e.target.textContent);
//     e.stopPropagation();
//   });
// });

// console.log(box);
box.addEventListener('click', (e) => {
  //   console.log('Box Clicked');
  e.stopPropagation();
  //   console.log(e);
  if (e.target.nodeName === 'BUTTON') {
    console.log('Button Clicked');
    if (e.target.textContent === 'Add Item') {
      createTodoListItem();
    }
  } else {
    console.log('rest Clicked');
  }
});

document.querySelector('p').addEventListener('copy', (e) => {
  console.log('Copied');
});
