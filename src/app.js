
let Quien = ["Mi perro", "Mi tio", "Un Alien", "Mi vecina"];
let Accion = ["se comió", "se llevó", "exterminó", "se tiró un pedo"]; 
let Que = ["mi proyecto", "mi dinero", "mi paquete", "mi motivación"];
let Cuando = ["hoy", "ayer", "hace unos días", "el año pasado"]


let Colores = [
  ["deepskyblue","yellow"],
  ["coral","deepskyblue"],
  ["dodgerblue","lightgreen"],
  ["deepskyblue","pink"]
]

let Emojis = ["💯", "🎁", "🧁", "🚀"]

function generar() {
  let rdm1 = Math.floor(Math.random() * Quien.length);
  let rdm2 = Math.floor(Math.random() * Accion.length);
  let rdm3 = Math.floor(Math.random() * Que.length);
  let rdm4 = Math.floor(Math.random() * Cuando.length);
  let rdm5 = Math.floor(Math.random() * Colores.length);
  
  document.getElementById("excuse").innerHTML = Quien[rdm1] + " " + Accion[rdm2] + ' ' + Que[rdm3] + ' ' + Cuando[rdm4];
  document.body.style.background = `linear-gradient(to right, ${Colores[rdm5][0]}, ${Colores[rdm5][1]})`;
  document.getElementById("emoji").innerHTML = Emojis[Math.floor(Math.random() * Emojis.length)];

}
window.onload = generar
document.getElementsByTagName("button")[0].onclick = function() {
  
generar()
};
  
