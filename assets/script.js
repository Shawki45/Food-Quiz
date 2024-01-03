var startButtonEL = document.getElementById('Start-Quiz');
startButtonEL.addEventListener("click", Startquiz); 

var TimerEl = document.getElementById('Timer')

var Seconds = 75 

function Startquiz() {
    console.log(startButtonEL)
    TimerEl.textContent = Seconds
    var Timer = setInterval(function() {

        // Find the distance between now and the count down date
        Seconds = Seconds - 1;
        TimerEl.textContent = Seconds  
          
    
          
        // If the count down is over, write some text 
         if (distance < 0) {
           clearInterval(x);
        
        }
      }, 1000);

  }
  