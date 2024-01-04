var startButtonEL = document.getElementById('Start-Quiz');
startButtonEL.addEventListener("click", Startquiz); 
var TimerEl = document.getElementById('Timer')
var Seconds = 5 
var questions = [
  {
    question: 'Which US state has the largest population?',
    choices: ['Delaware', 'California', 'New York', 'Kentucky'],
    answer: 'California'
  },
  {
    question: 'Which US state has the largest population?',
    choices: ['Delaware', 'California', 'New York', 'Kentucky'],
    answer: 'California'
  },

]

function Startquiz() {
    console.log(startButtonEL)
    TimerEl.textContent = Seconds
    document.querySelector("#Welcome").style.display = 'none'
    var Timer = setInterval(function() {

        // Find the distance between now and the count down date
        Seconds = Seconds - 1;
        TimerEl.textContent = Seconds  
          
    
          
        // If the count down is over, write some text 
         if (Seconds < 1) {
           clearInterval(Timer);
        
        }
      }, 1000);
      displayquestions()
  }
  
function displayquestions() {
  var questionEl = document.createElement("h3")
  questionEl.textContent = questions[0].question
  document.querySelector("#quiz-questions").append(questionEl)

for (var i = 0; i < questions[0].choices.length;i++) {
var button = document.createElement("button")
button.textContent = questions[0].choices[i]
document.querySelector("#quiz-questions").append(button)

}

}