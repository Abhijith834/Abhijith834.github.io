 // COUNT 0 TO 100

window.onload = function() {
    var counterElement = document.getElementById('counter');
    var count = 0;

    var button = document.createElement('button');
    var text1 = document.createElement('h4')
    text1.textContent = 'Click to get Access';
    // button.textContent = 'Click to unlock';

    function incrementCounterSlow() {
        counterElement.innerText = count;
        count++;

        if (count > 27) {
            clearInterval(slowIntervalId);
            startFastCount(); // Start the faster count when reaching 33
        }
    }

    function incrementCounterFast() {
        counterElement.innerText = count;
        count++;
        if (count > 100) {
            
            
            document.getElementById('buttonContainer').appendChild(button);
            document.getElementById('buttonContainer').appendChild(text1);
            button.addEventListener('click', event => accessGranted());
            clearInterval(fastIntervalId);
        }
    }

    function startFastCount() {
        clearInterval(slowIntervalId); // Clear the slow count interval
        fastIntervalId = setInterval(incrementCounterFast, 10); // Change the interval duration for faster count
    }

    function changeBackgroundColor() {
      document.body.style.backgroundColor = 'lightblue'; // Change background color
    }

    var slowIntervalId = setInterval(incrementCounterSlow, 60); // Slow count until 33


    // GETTING ACCESS 

    function accessGranted() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;
    
      setTimeout(() => {
          const h1Element = document.querySelector("h1");
          let iteration = 0;
      
          clearInterval(interval);
      
          interval = setInterval(() => {
              h1Element.innerText = h1Element.innerText
                  .split("")
                  .map((letter, index) => {
                      if(index < iteration) {
                          return h1Element.dataset.value[index];
                      }
                      return letters[Math.floor(Math.random() * 26)];
                  })
                  .join("");
      
              if(iteration >= h1Element.dataset.value.length){ 
                  h1Element.classList.add('blinking'); // change colour
                  clearInterval(interval);  
              }
              iteration += 1 / 3;
          }, 40);
          
      }, 40);
  }
 
}




/*function accessGranted() {
  const letters = "01010101";

  let interval = null;
  
  setTimeout(() => {
      const h1Element = document.querySelector("h1");
      let iteration = 0;
  
      clearInterval(interval);
  
      interval = setInterval(() => {
          h1Element.innerText = h1Element.innerText
              .split("")
              .map((letter, index) => {
                  if(index < iteration) {
                      return h1Element.dataset.value[index];
                  }
                  return letters[Math.floor(Math.random() * 8)];
              })
              .join("");
  
          if(iteration >= h1Element.dataset.value.length){ 
              h1Element.classList.add('blinking'); // change colour
              clearInterval(interval);  
          }
          iteration += 1 / 3;
      }, 100);
      
  }, 80);}*/