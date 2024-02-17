var startButtonEL = document.getElementById('Start-Quiz');
startButtonEL.addEventListener("click", Startquiz); 
var TimerEl = document.getElementById('Timer')
var Seconds = 75 
var index = 0
var Timer
var questions = [
  {
    // array containing the quiz questions
    question: 'Which food is best?',
    choices: ['Chicken', 'Steak', 'Fish', 'All-the-above'],
    answer: 'All-the-above'
  },
  {
    question: 'What is the best kind of snack?',
    choices: ['Chips', 'Candy', 'Carrots', 'All the above'],
    answer: 'Carrots'
  },
  {
    question: 'How many bars comes with a twix pack?',
    choices: ['5','4','2','1'],
    answer: '2'
  },
  {
    question: 'What is a good fruit to eat?',
    choices: ['Mango','Carrots','Apples','Guava'],
    answer: 'Mango'
  }

]
// this starts the quiz
function Startquiz() {
    console.log(startButtonEL)
    TimerEl.textContent = Seconds
    document.querySelector("#Welcome").style.display = 'none'
    Timer = setInterval(function() {

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
  // this displays the questions
function displayquestions() {
  document.querySelector("#quiz-questions").innerHTML=""
  var questionEl = document.createElement("h3")
  questionEl.textContent = questions[index].question
  document.querySelector("#quiz-questions").append(questionEl)

for (var i = 0; i < questions[index].choices.length;i++) {
var button = document.createElement("button")
button.textContent = questions[index].choices[i]
// add the event listener for each choice button
button.addEventListener("click", function(event){
  if (event.target.innerText !== questions[index].answer){
    Seconds -= 5
  }
  // moves to the next question
index ++
if (index >= questions.length){
  var score = document.createElement("p")
  score.innerText = "Your Score Is " + (Seconds -5)
  document.querySelector("#quiz-questions").innerHTML=""
  document.querySelector("#quiz-end").append(score)

  // stops the timer
  clearInterval(Timer);
  return 
}
displayquestions()
})
document.querySelector("#quiz-questions").append(button)

}
}