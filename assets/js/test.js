/* Solution created by Dan Wilson and sourced from https://codepen.io/danwilson/pen/dqZvmx */

const selects = Array.from(document.querySelectorAll('select'));
const display = document.querySelector('.display');

selects.forEach(select => {
  select.addEventListener('change', e => {
    display.style.setProperty(`--${e.currentTarget.id}`, e.currentTarget.value);
  });
})