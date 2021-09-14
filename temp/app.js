//node initializations
const express = require('express');

//DOM asignment
const dataFirst = document.querySelector('.first__data');
const btnFirst = document.querySelector('.first__button');

//code
btnFirst.addEventListener('click', () => (dataFirst.textContent = `done!`));
