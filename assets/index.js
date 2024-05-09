
let senha = document.getElementById('senha');
let msg = document.getElementById('msg');
let forca = document.getElementById('forca');
let input = document.getElementById('container-input')

senha.addEventListener('input', () => {
  if (senha.value.length > 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
  if (senha.value.length < 4) {
    forca.innerHTML = "fraca";
    msg.style.color = 'red';
    input.style.border = "2px solid red";
  } else if (senha.value.length >= 4 && senha.value.length < 8) {
    forca.innerHTML = "média";
    msg.style.color = 'yellow';
    input.style.border = "2px solid yellow";
  } else {
    forca.innerHTML = "forte";
    msg.style.color = 'green';
    input.style.border = "2px solid green";
  }
});