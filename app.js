 // COUNT 0 TO 100

window.onload = function() {
    var counterElement = document.getElementById('counter');
    var count = 0;

    var button = document.createElement('button');
    var text1 = document.createElement('h4')
    text1.id = 'buttonText';
    text1.textContent = 'Click to get Access';

    function incrementCounterSlow() {
        counterElement.innerText = count;
        count++;

        if (count > 27) {
            clearInterval(slowIntervalId);
            startFastCount();
        }
    }

    function incrementCounterFast() {
        counterElement.innerText = count;
        count++;
        if (count > 100) {
            document.getElementById('buttonContainer').appendChild(button);
            document.getElementById('buttonContainer').appendChild(text1);
            button.addEventListener('click', event =>
            access());
            clearInterval(fastIntervalId);
            setTimeout(() => {
                document.getElementById('buttonText'), typing('buttonText', 40);

            }, 200);
        }
    }

    function startFastCount() {
        clearInterval(slowIntervalId);
        fastIntervalId = setInterval(incrementCounterFast, 10);
    }

    function changeBackgroundColor() {
      document.body.style.backgroundColor = 'lightblue';
    }

    var slowIntervalId = setInterval(incrementCounterSlow, 6);


    // GETTING ACCESS 
    function access() {
      accessGranted("a1");
      setTimeout(() => {
        accessGranted("a2")
      },700);
    };

    function accessGranted(element) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;
    
      setTimeout(() => {
          const h1Element = document.querySelector(element);
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
                  // accessGrantedh2("a2");
              }
              iteration += 1 / 3;
          }, 40);
          
      }, 40);
      
  }
  
}

// TYPING ANIMATION 

function typing(id, time) {
    const h1 = document.getElementById(id);
    let text = h1.innerText;
    h1.innerHTML = "";
  
    function createCharacterSpan(character, delay) {
      const span = document.createElement('span');
      span.textContent = character;
      if (character !== ' ') {
        span.style.opacity = "0";
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.color = `white`;
        }, delay);
      }
      return span;
    }
  
    Array.from(text).forEach((char, index) => {
      
      if (char == " ") {
        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = "&ensp;";
        h1.appendChild(spaceSpan);
      }
      
      else {
        const delay = index * time + Math.random() * 80;
        const charSpan = createCharacterSpan(char, delay);
        h1.appendChild(charSpan);
      }
    });
  }
  
  
setTimeout(() => {
  const elements = document.querySelectorAll('.access a2'); // Select all .access a2 elements
  elements.forEach(element => {
    element.style.animation = '';
    element.style.animationFillMode = '';
    element.classList.add('blinking');
  });
}, 400);