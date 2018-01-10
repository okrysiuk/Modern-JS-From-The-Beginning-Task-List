// document.getElementsByClassName
/*
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);
*/
// document.getElementByTagName
/*
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

//Convert HTML Collection into array

lis= Array.from(lis);
lis.reverse();
lis.forEach(function(li){
  console.log(li.className);
  li.textContent = 'Hello';
});
console.log(lis);
*/

//documents.querySelectorAll

const items = document.querySelectorAll('li.collection-item');

items.forEach(function(item){
  item.textContent = 'Hello';
});


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.style.background ='#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'green';
}

console.log(items);