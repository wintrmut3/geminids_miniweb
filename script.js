
// pronoun switching
var gender = 0;
var gp = "";
var go = "";

$("#b_male").click(function() {
  gender = 0;
  $("#genderChoice").fadeOut(500);
  active = true;
})
$("#b_female").click(function() {
  gender = 1;
  $("#genderChoice").fadeOut(500);
  active = true;
})
switch (gender) {
  case 0:
    gp = "he"; //pronoun
    go = "his"; //possessive
    break;
  case 1:
    gp = "she";
    go = "her";
    break;
}
console.log(active);
function capitalize(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}
var numMap = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
var randomTime = Math.round(Math.random()*3+3);


const text = [" ",
  "<strong><br>Prologue</strong>",
  "Some things are better not understood...",
  "Like the crackle of a bright fire,",
  "the pale glimmer of moonlight reflected off an icy pond,",
  "or the pervasive quiet that follows a heavy snowfall.",
  "<strong><br>PART I - Beginnings<br></strong>",
  "\""+numMap[randomTime]+ " minutes!\" " + capitalize(gp)+ " says, " + go + " voice muffled by the thick scarf " + gp + " wears around " + go + " face.",
  "It is December 12th, " + new Date().getFullYear() + ". Tonight, the Geminid meteor shower reaches its peak.",
  "The two of you meander towards a high lookout, a long way up a winding path lit dimly by ancient gaslamps and silver moonlight.",
  "The forest envelops you, as the dark shadows of trees fill your field of vision.",
  "The path is also lit by a multitude of fairy lights, new LEDs that someone has recently installed to illuminate the way to the lookout."
];
let t = 0;

const timeline = [
  flv,
  flv,
  flv,
  flv,
  flv,
  flv,
  flv,
  flv,
  flv,
  flv,
  flv,
  flv, //12 starting flavour text, then first choice
  chc,
]
const choiceFlags = [
  0,
  1
]
const params = [
  text[0],
  text[1],
  text[2],
  text[3],
  text[4],
  text[5],
  text[6],
  text[7],
  text[8],
  text[9],
  text[10],
]

var audio = new Audio('crickets.wav');
audio.loop = true;
audio.volume = 0.1;
audio.play();


var active = false; //they answered the starting questions

const flvText = document.getElementById('flvtxt');
const flvTextDiv = document.getElementById('flvTextBox');

function flv(text) {
  //flvText.innerHTML += "<br>" + text;
  const textEl = document.createElement('p');
  //const node = document.createTextNode("");
  textEl.innerHTML = text;
  var identifier = 'text_' + t;
  textEl.setAttribute('id', identifier)
  //textEl.appendChild(node);
  flvTextDiv.appendChild(textEl);
  console.log(identifier);
  $("#" + identifier).hide();
  $("#" + identifier).fadeIn();
  playStep(t);
}

function chc(description, choice1, choice2){

}

//const track = [flv(text[0]), flv(text[1]), flv(text[2])];
function playStep(timestep) {
  var audioChoices = ["step_0", "step_1"];
  choice = audioChoices[timestep % 2];
  var stepSound = new Audio(choice + ".wav");
  stepSound.volume = 0.1;
  stepSound.play();
}


function update() {
  timeline[t](params[t]);
}

$(document).ready(function() {
  $('.choices').hide(); // hides
})


$(document).click(function() {
  if(active){
    console.log("Clicked!" + "Time = " + t);
    t++;
    update();
  }
});
