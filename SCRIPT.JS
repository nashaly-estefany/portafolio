let menuVisible = false;
function mostrarOcultarMenu(){
  menuVisible = !menuVisible;
  document.getElementById("nav").classList.toggle("responsive", menuVisible);
}
function seleccionar(){
  menuVisible = false;
  document.getElementById("nav").classList.remove("responsive");
}


function efectoHabilidades(){
  const skills = document.getElementById("skills");
  const distancia = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia >= 300){
    const clases = ["javascript","htmlcss","database","github","python","english","comunicacion","trabajo","creatividad","autodidactic"];
    document.querySelectorAll(".progreso").forEach((el,i)=> el.classList.add(clases[i]));
  }
}
window.addEventListener("scroll", efectoHabilidades);
