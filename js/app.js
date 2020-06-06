const burgerBTN = document.getElementsByClassName('burger')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

burgerBTN.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});