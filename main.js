x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
   number = Number(content);
   console.log(number);
   if(Number.isInteger(number)){
     document.getElementById("status").innerHTML = "Started Drawing " +number +" Apple"; 
     draw_apple = "set";

}
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw_apple() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = number + " Apples drawn";
    draw_apple = "";
    speak_data = number + "Apples Drawn";
    speak();
    for(var i = 1; i <= number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image( apple, x, y, 50, 50);
  }
}
}

function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
function preload(){
  apple = loadImage("apple.png");
}