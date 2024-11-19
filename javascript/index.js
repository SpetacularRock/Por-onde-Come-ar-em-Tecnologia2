
function interagemenu() {
    var sidebar = document.getElementById("menulateral");
    // alert("o andre e gay")
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "250px";
    }
  }






                                                                                             /*animações*/



//  // Função para criar um observador para cada elemento
// function createObserver(element, options) {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         element.classList.add('is-visible');
//       } else {
//         element.classList.remove('is-visible');
//       }
//     });
//   }, options);

//   observer.observe(element);
// }

// // Seleciona todos os elementos que você quer animar
// const elements = document.querySelectorAll('.animate-on-scroll');

// // Cria um observador para cada elemento
// elements.forEach(element => {
//   createObserver(element, {
//     rootMargin: '0px 0px -100px 0px' // Ajusta a distância antes de iniciar a animação
//   });
// });
  
