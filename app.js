 // COUNT 0 TO 100

window.onload = function() {
    var counterElement = document.getElementById('counter');
    var count = 0;

    var button = document.createElement('button');
    var text1 = document.createElement('h4')
    text1.id = 'buttonText';
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

            setTimeout(() => {
                // document.getElementById('buttonText'), animateTextColors();
                document.getElementById('buttonText'), animateButtonText();

            }, 200);

            // document.getElementById('buttonText').addEventListener('click', animateButtonText);

        }
    }

    function startFastCount() {
        clearInterval(slowIntervalId); // Clear the slow count interval
        fastIntervalId = setInterval(incrementCounterFast, 10); // Change the interval duration for faster count
    }

    function changeBackgroundColor() {
      document.body.style.backgroundColor = 'lightblue'; // Change background color
    }

    var slowIntervalId = setInterval(incrementCounterSlow, 6); // Slow count until 33


    // GETTING ACCESS 

    function accessGranted() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;
    
      setTimeout(() => {
          const h1Element = document.querySelector("a1");
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
                //   h1Element.classList.add('blinking'); // change colour
                  clearInterval(interval);  
                  accessGrantedh2();
              }
              iteration += 1 / 3;
          }, 40);
          
      }, 40);
      
  }


  function accessGrantedh2() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
  
    setTimeout(() => {
        const h1Element = document.querySelector("a1");
        const h2Element = document.querySelector("a2");
        let iteration = 0;
    
        clearInterval(interval);
    
        interval = setInterval(() => {
            h2Element.innerText = h2Element.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return h2Element.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
    
            if(iteration >= h2Element.dataset.value.length){ 
                h1Element.classList.add('blinking');
                h2Element.classList.add('blinking'); // change colour
                clearInterval(interval);  
                }
            iteration += 1 / 3;
            }, 40);
        
        }, 40);
    }
 
}


// TYPING ANIMATION 

function animateButtonText() {
    const h1 = document.getElementById('buttonText');
    let text = h1.innerText;
    h1.innerHTML = ""; // Clear the text initially
  
    // Function to create and return a span element for a character
    function createCharacterSpan(character, delay) {
      const span = document.createElement('span');
      span.textContent = character;
      if (character !== ' ') { // Check if the character is not a space
        span.style.opacity = "0"; // Start with character hidden
        setTimeout(() => {
          span.style.opacity = "1"; // Make character visible
          span.style.color = `white`; // Change color to white
        }, delay);
      }
      return span;
    }
  
    // Add each character with a delay increasing from left to right
    Array.from(text).forEach((char, index) => {
      if (char == " ") {
        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = "&ensp;"; // Use HTML entity for space
        h1.appendChild(spaceSpan);
      }
      
      else {

      
        const delay = index * 50 + Math.random() * 80; // Adjust the delay here
        const charSpan = createCharacterSpan(char, delay);
        // console.log(charSpan);
        h1.appendChild(charSpan);
      }
    });
  }
  
  
setTimeout(() => {
  const elements = document.querySelectorAll('.access a2'); // Select all .access a2 elements
  elements.forEach(element => {
    // Remove existing animation properties
    element.style.animation = '';
    element.style.animationFillMode = '';
    
    // Then add the .blinking class
    element.classList.add('blinking');
  });
}, 400);
