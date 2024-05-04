
const frontend = [{
  name:"Imdb-clone",
  github:'https://github.com/Gavaskar0543/imdb-clone',
  hosted:''
},

{
  name:"Chya Mart",
  github:'https://github.com/Gavaskar0543/imdb-clone',
  hosted:''
}
,
{
  name:"Todo",
  github:'https://github.com/Gavaskar0543/imdb-clone',
  hosted:''
}

]
function skillbarprogress(){
    let skillbars = document.querySelectorAll('.eighty-five');
let interval = setInterval(myFunction, 100);
let i = 0;

function myFunction() {
  // Loop through each element with the class '.eighty-five'
  
  skillbars.forEach(skillbar => {
    // Update the width of each element
    if(i <= 80){
    skillbar.style.width = i + 5 + '%';
    }
  });
  i += 5;

}

setTimeout(function () {
  clearInterval(interval);
}, 5000);

}
// Get the current scroll position when the user scrolls
window.addEventListener('scroll', function() {
    var currentPosition = window.scrollY;
    console.log('Current Scroll Position:', Math.round(currentPosition) + 'px');
    if(Math.round(currentPosition) > '600'){
        console.log('called')
        skillbarprogress();
    }
  });
  
 const projectDisplay = document.querySelector('.project-display');
 const liElements = document.querySelectorAll('.project-categroy li');
 
 liElements.forEach(li => {
  // Add onclick event listener
  li.addEventListener('click', () => {
    liElements.forEach(otherLi => {
      if (otherLi !== li) {
          otherLi.classList.remove('selected-btn');
      }
  });

  // Add 'selected-btn' class to the clicked <li> element
  li.classList.add('selected-btn')
      projectCall(li.textContent); // Log the text content of the clicked <li> element
  });
});
const projectCall = (stack)=>{
  if(stack === 'Frontend'){
    updateFrontendOnDisplay();
  }
  if(stack === 'Backend'){
    updateBackendOnDisplay();
  }
  if(stack === 'Full Stack'){
    updateFSDOnDisplay();
  }
  if(stack === 'Game'){
    updateGameOnDisplay();
  }
  if(stack === 'Freelance'){
    updateFreelanceOnDisplay();
  }
}
const updateBackendOnDisplay = ()=>{
  projectDisplay.innerHTML = '';

let div = document.createElement('div');
div.textContent = "backend";
projectDisplay.append(div);
}
const updateFrontendOnDisplay = ()=>{
  projectDisplay.innerHTML = '';
  let div = document.createElement('div');
  div.textContent = "frontend";
  projectDisplay.append(div);

}
const updateFreelanceOnDisplay = ()=>{
  projectDisplay.innerHTML = '';
  let div = document.createElement('div');
  div.textContent = "freelance";
  projectDisplay.append(div);

}
const updateGameOnDisplay = () =>{
  projectDisplay.innerHTML = '';
  let div = document.createElement('div');
  div.textContent = "game";
  projectDisplay.append(div);

}
const updateFSDOnDisplay = () =>{
  projectDisplay.innerHTML = '';
  let div = document.createElement('div');
  div.textContent = "fsd";
  projectDisplay.append(div);

}