const hamburgur = document.querySelector(".hamburgur");
const navmenu = document.querySelector(".menu");

hamburgur.addEventListener("click",()=>{
     hamburgur.classList.toggle("active");
     navmenu.classList.toggle("active");
})