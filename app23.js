// document.getElementById()
console.log(document.getElementById('task-title'));
//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);
//changing styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.background = '#fff';
document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';

//Change content

document.getElementById('task-title').textContent = 'Tasssk list';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task list</span>';

// document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'yellow';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';