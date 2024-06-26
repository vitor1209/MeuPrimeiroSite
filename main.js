const btnMenu = document.querySelector('.hamb');
const li = document.querySelector('.menu')

// Variável para controlar o estado do menu
let estaAberto = false;

// Função para alternar a visibilidade do menu
function toggleMenu() {
  estaAberto = !estaAberto;
  if (estaAberto == false) {
    
      li.classList.add('visible'); 
  } else {
    
      li.classList.remove('visible'); 
  } 

  }


btnMenu.addEventListener('click', toggleMenu);

function fecharMenuAoRolar() {
  if (estaAberto) {
    toggleMenu(); 
  }
}

document.addEventListener('scroll', fecharMenuAoRolar);



