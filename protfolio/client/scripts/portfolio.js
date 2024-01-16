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
  