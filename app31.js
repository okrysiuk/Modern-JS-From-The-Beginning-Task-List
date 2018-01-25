// Event bubbling
/*
document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
});
*/
//Event delegation

//const deleteItem = document.querySelector('.delete-item');

//deleteItem.addEventListener('click', delItem);

document.body.addEventListener('click', delItem);

function delItem(e){
  //console.log('delete item');
  //console.log(e.target);
  /*if(e.target.className === 'fa fa-remove'){
    console.log('this is delete item');
  }
  
  if(e.target.parentElement.className === 'delete-item secondary-content'){
    console.log('target is a');
  }
  */
  if(e.target.parentElement.classList.contains('secondary-content')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
  
}

