var button = document.getElementsByClassName('button');

function showButtonText() {
  for(i = 0; i < button.length; i++) {
      alert(button[i].innerText);
  }
}

window.onload = function() {
  let timeout = setTimeout(showButtonText, 500);
}