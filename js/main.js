const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// день 1//

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logAnForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('gloDelivery');


function togleModalAuth() {
  loginInput.style.borderColor = '';
  modalAuth.classList.toggle('is-open');
}



function authorized() {

  function logOut() {
    login = null;
    
    localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);

    checkAuth();

  }
  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut)

}

function notAuthorized() {
  console.log('не авторизован');

  function logIn(event) {
    event.preventDefault();
    
    if(loginInput.value) {

    login = loginInput.value;

    localStorage.setItem('gloDelivery', login);

    togleModalAuth();
    buttonAuth.removeEventListener('click', togleModalAuth);
    closeAuth.removeEventListener('click', togleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();

    } else {
      loginInput.style.borderColor = "red"
    }
    
    

  }
  
  buttonAuth.addEventListener('click', togleModalAuth);
  closeAuth.addEventListener('click', togleModalAuth);
  logInForm.addEventListener('submit', logIn);

}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();