const boxes = document.querySelectorAll('.elem');
const entries = document.querySelectorAll('.hidden-box');
// console.log(box)

// box.addEventListener('mouseover', function() {
//   console.log('click', box)
//   // box.setAttribute('style', 'width: 190px');
//   box.classList.add('box-pulse');
// })

// console.log(boxes[0])


function animation() {
  let index = 0;

  function loop() {
    if (index < 5) {
      boxes[index].classList.add('box-pulse');
      entries[index].setAttribute('style', 'display: block');
      index++;
      setTimeout(function() { 
        loop();
      }, 2000)
      
    } else {
      index = 0;
      entries.forEach(entry => {
        entry.setAttribute('style', 'display: none');
      })
      setTimeout(function() {
        loop();        
      }, 2000)
    }
    boxes[index].classList.remove('box-pulse'); 
    
  }
  loop();
}
animation();
