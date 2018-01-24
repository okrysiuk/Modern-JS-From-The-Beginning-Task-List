const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
/*
//Click
clearBtn.addEventListener('click', runEvent);

//Double click
clearBtn.addEventListener('dblclick', runEvent);
//Mousedown
clearBtn.addEventListener('mousedown', runEvent);
//Mouseup
clearBtn.addEventListener('mouseup', runEvent);
//Mouseenter
card.addEventListener('mouseenter', runEvent);
//Mouseleave
card.addEventListener('mouseleave', runEvent);
//Mouseover
card.addEventListener('mouseover', runEvent);
//Mouseout
card.addEventListener('mouseout', runEvent);
*/
card.addEventListener('mousemove', runEvent);
//Event Handler
function runEvent(e){
  console.log('EVENET TYPE: ' + e.type);

  //heading.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetX}`;
  heading.innerHTML = `<h6>Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}</h6>`;

  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 55)`
}