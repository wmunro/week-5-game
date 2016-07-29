

function newDoc1() {window.location.assign("oldtestament.html");}
                
function newDoc2() {window.location.assign("newtestament.html");}





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
            document.getElementById('time').innerHTML = 'OOPS , you ran out of time!';
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

 var questions = [
 {question:"a,b,c,d,e,f,j,k,l,m,n,o",answers:["first","second","third","fourth"],correctAnswer:"b"},
 {question:"string for question",answers:["answer1","answer2"],correctAnswer:"correct one"},{question:"string for question",answers:["answer1","answer2"],correctAnswer:"correct"}]

var a = document.getElementsById("first");
var b = document.getElementsById('second');
var c = document.getElementsById('third');
var d = document.getElementsById('fourth');
var e = document.getElementsById('fifth');
var f = document.getElementsById('sixth');
var g = document.getElementsById('seventh');
var h = document.getElementsById('eighth');
var i = document.getElementsById('ninth');
var j = document.getElementsById('tenth');
var k = document.getElementsById('eleventh');
var l = document.getElementsById('twelfth');
var m = document.getElementsById('twelfth');
var n = document.getElementsById('thirteenth');
var o = document.getElementsById('fourteenth');
var p = document.getElementsById('fifteenth');