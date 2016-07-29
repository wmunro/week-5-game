

function newDoc1() {window.location.assign("oldtestament.html");}
                
function newDoc2() {window.location.assign("newtestament.html");}

function homePage() {window.location.assign("index.html");}


function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function ()
    {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0 ) 
        {
            document.getElementById('time').innerHTML = 'OOPS , you ran out of time';
            clearInterval(interval);
        }

    }, 1000);
};

window.onload = function () 
{
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);


};

var firstQuestion = document.getElementsByName("firstQuestion");
var secondQuestion = document.getElementsByName("secondQuestion");
var thirdQuestion = document.getElementsByName("thirdQuestion");
var fourthQuestion = document.getElementsByName("fourthQuestion");

var myArr =[firstQuestion,secondQuestion,thirdQuestion,fourthQuestion];
var score = 0;
var firstParagraph = document.getElementById("firstParagraph");
var secondParagraph = document.getElementById("secondParagraph");

function submitted(){
    window.location.assign("results.html");
}
{
    for(var i = 0;i<myArr.Length;i++) 
    {
        for(var o = 0;o<firstQuestion.Length; o++)

        {
            if(myArr[i][o].value == "1" && myArr[i][o].checked) 
            {
                firstParagraph.innerHTML = "You got question " + (i+ 1) + " correct!";
                score++;
            } 

        };
    };

     var showScore = Math.round((score/4)*100) ;
            secondParagraph.innerHTML = showScore;
 }      
