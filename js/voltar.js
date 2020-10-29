var voltar = document.getElementById('voltar');

voltar.addEventListener('click', goBack);

function goBack(){
  console.log('voltar');
  document.getElementsByClassName('toggler').checked = false;
  window.history.back();
}