let themeButton = document.querySelector('.theme-button');
let background = document.querySelector('.background');
let footer = document.querySelector('.page-footer');

let phone = document.querySelector('.phone');
let email = document.querySelector('.email');
let github = document.querySelector('.bi-github');
let discord = document.querySelector('.bi-discord');
let telegram = document.querySelector('.bi-telegram');

themeButton.onclick = function () {

  themeButton.classList.toggle('bi-brightness-low');
  themeButton.classList.toggle('bi-moon');

  background.classList.toggle('light');
  background.classList.toggle('dark');

  footer.classList.toggle('light');
  footer.classList.toggle('dark');


  phone.classList.toggle('light');
  phone.classList.toggle('dark');

  email.classList.toggle('light');
  email.classList.toggle('dark');

  github.classList.toggle('light');
  github.classList.toggle('dark');

  discord.classList.toggle('light');
  discord.classList.toggle('dark');

  telegram.classList.toggle('light');
  telegram.classList.toggle('dark');
};