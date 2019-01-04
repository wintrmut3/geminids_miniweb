// pronoun switching
var gender = 0;
var gp = "";
var go = "";
var active = false; //they answered the starting questions

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

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
var numMap = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
var randomTime = Math.round(Math.random() * 3 + 3);


const text = [
  " ",
  "<strong><br>Prologue</strong>",
  "Some things are better not understood...",
  "Like the crackle of a bright fire,",
  "the pale glimmer of moonlight reflected off an icy pond,",
  "or the pervasive quiet that follows a heavy snowfall.",
  "<strong><br>ACT I - Beginnings<br></strong>",
  "\"" + numMap[randomTime] + " minutes!\" " + capitalize(gp) + " says, " + go + " voice muffled by the thick scarf " + gp + " wears around " + go + " face.",
  "It is December 12th, " + new Date().getFullYear() + ". Tonight, the Geminid meteor shower reaches its peak.",
  "The two of you meander towards a high lookout, a long way up a winding path lit dimly by ancient gaslamps and silver moonlight.",
  "The forest envelops you, as the dark shadows of trees fill your field of vision.",
  "The path is also lit by a multitude of fairy lights, new LEDs that someone has recently installed to illuminate the way to the lookout.",
  "The walk is a pleasant one during daylight, but at night, especially on this night, the world seems to become alive with glinting snow and crystalline ice.",
  "The steps are ancient, fahsioned of old wooden planks held fast by rusting nails.",
  "Despite their isolation, someone has cleared them of ice and salted them.",
  "<strong><br>ACT II - Ascent<br></strong>",
  "It's not far to the lookout. You see a clear path ahead.",
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
  cnq,
  flv,
  flv,
  flv,
  flv,
  flv,
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
  text[11],
  ["Something makes you stop, and wait a moment.", "You look at the lights.", "You look to your left.", 0],
  ["They are of many colours, a red like candycane or a blue like ice.<br>Someone has evidently taken a lot of care in arranging them.", capitalize(gp) + " is grinning at you, or at least you think so. It's hard to tell beneath the heavy scarf. " + capitalize(go) + " eyes sparkle, dancing with reflected starlight.", 0],
  text[12],
  text[13],
  text[14],
  text[15],
  text[16],
]

var audio = new Audio('crickets.wav');
audio.loop = true;
audio.volume = 0.1;
audio.play();

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
  //playStep(t);
}



function chc(array) {
  let description = array[0];
  let choice1 = array[1];
  let choice2 = array[2];
  let choiceNum = array[3];
  var identifier = 'choice_' + t;
  const descriptor = document.createElement('p');
  descriptor.setAttribute('id', identifier);
  descriptor.setAttribute('style', "color: cyan");
  descriptor.innerHTML = description;
  flvTextDiv.appendChild(descriptor);

  const b_choice1 = document.createElement('input');
  var identifier_b1 = "choiceb_1" + t;
  b_choice1.setAttribute('id', identifier_b1);
  b_choice1.setAttribute('value', choice1);
  b_choice1.setAttribute('class', 'button');
  flvTextDiv.appendChild(b_choice1);

  const b_choice2 = document.createElement('input');
  var identifier_b2 = "choiceb_2" + t;
  b_choice2.setAttribute('id', identifier_b2);
  b_choice2.setAttribute('value', choice2);
  b_choice2.setAttribute('class', 'button');
  flvTextDiv.appendChild(b_choice2);

  $("#" + identifier_b1).hide();
  $("#" + identifier_b1).fadeIn();
  $("#" + identifier_b2).hide();
  $("#" + identifier_b2).fadeIn();
  $("#" + identifier).hide();
  $("#" + identifier).fadeIn();

  $("#" + identifier_b1).click(function() {
    $("#" + identifier_b1).fadeOut(300);
    $("#" + identifier_b2).fadeOut(300);
    choiceFlags[choiceNum] = 1;
  })
  $("#" + identifier_b2).click(function() {
    $("#" + identifier_b1).fadeOut(300);
    $("#" + identifier_b2).fadeOut(300);
    choiceFlags[choiceNum] = 2;
  })
}

function cnq(array) {
  let cnq1 = array[0];
  let cnq2 = array[1];
  let flag_idx = array[2];
  var cnqText = document.createElement('p');
  if (flag_idx == 1){
    cnqText.innerHTML = cnq1;
  }
  else{
    cnqText.innerHTML = cnq2;
  }
  // switch (flag_idx){
  //   case 1:
  //     cnqText.innerHTML = cnq1;
  //   break;
  //   case 2:
  //     cnqText.innerHTML = cnq2;
  //   break;
  // }
  flvTextDiv.appendChild(cnqText);
  console.log(cnq2);
}

//const track = [flv(text[0]), flv(text[1]), flv(text[2])];
function playStep(timestep) {
  var audioChoices = ["step_0", "step_1"];
  choice = audioChoices[timestep % 2];
  var stepSound = new Audio(choice + ".wav");
  stepSound.volume = 0.1;
  stepSound.play();
}

// function scrollingAuto(){
//   window.scrollBy(0,100);
//   varx= setTimeout('scrollingAuto', 10);
//   console.log("scrolling!");
// }
// scrollingAuto();
function autoScroll(){
  var x = setInterval(function(){ console.log("SCROLLING..."); window.scrollBy(0,8) }, 10);
  setTimeout(function(){clearInterval(x);}, 500);
  //setInterval(function(){ window.scrollBy(10); console.log("SCROLLING..."); }, 10);
}
//autoScroll()
function update() {
  timeline[t](params[t]);
  autoScroll()
}

$(document).ready(function() {
  $('.choices').hide(); // hides
})


$(document).click(function() {
  if (active) {
    console.log("Clicked!" + "Time = " + t);
    t++;
    update();
  }
});
