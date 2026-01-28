let who = ["Mi perro", "Mi tio", "Un Alien", "Mi vecina"];
let action = ["se comió", "se llevó", "exterminó", "se tiró un pedo"]; 
let what = ["mi proyecto", "mi dinero", "mi pawhatte", "mi motivación"];
let when = ["hoy", "ayer", "hace unos días", "el año pasado"]

let colors = [
  ["deepskyblue","yellow"],
  ["coral","deepskyblue"],
  ["dodgerblue","lightgreen"],
  ["deepskyblue","pink"]
]

let Emojis = ["💯", "🎁", "🧁", "🚀"]

function generarExcusa() {
  let rdmWho = Math.floor(Math.random() * who.length);
  let rdmAction = Math.floor(Math.random() * action.length);
  let rdmWhat = Math.floor(Math.random() * what.length);
  let rdmWhen = Math.floor(Math.random() * when.length);
  let rdmColors = Math.floor(Math.random() * colors.length);
  
  document.getElementById("excuse").innerHTML = who[rdmWho] + " " + action[rdmAction] + ' ' + what[rdmWhat] + ' ' + when[rdmWhen];
  document.body.style.background = `linear-gradient(to right, ${colors[rdmColors][0]}, ${colors[rdmColors][1]})`;
  document.getElementById("emoji").innerHTML = Emojis[Math.floor(Math.random() * Emojis.length)];

}
window.onload = generarExcusa
document.getElementsByTagName("button")[0].onclick = function() {
  
generarExcusa()
};
  
