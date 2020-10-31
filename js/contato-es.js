var formContainer = document.getElementById('form-container');
var formContatos = document.getElementById('form-contatos');
var v_respNumber = document.getElementById('resp_number_input');
var v_dentistaNumber = document.getElementById('dentista_number_input');
var erroMessage = document.getElementById('erro');

var contatosContainer = document.getElementById('contatos-container');
var editarContatos = document.getElementById('editar');

formContatos.addEventListener('submit', setContatos);
v_respNumber.addEventListener('keyup', phoneValidation);
v_dentistaNumber.addEventListener('keyup', phoneValidation);
editarContatos.addEventListener('click', configContatos);
erroMessage.addEventListener('click', closeErro);

function verifyContatos(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem('resp_name') == null || localStorage.getItem('resp_number') == null ||
        localStorage.getItem('dentista_name') == null || localStorage.getItem('dentista_number') == null) {
            formContainer.style.display = 'block';
        }else{
            formContainer.style.display = 'none';
            contatosContainer.style.display = 'block';
            loadContatos();
        }
      
    
    } else {
        // Sorry! No Web Storage support..
      }
}

function setContatos(e){
    e.preventDefault();

    var resp_name_input = document.getElementById('resp_name_input').value;
    var resp_number_input = document.getElementById('resp_number_input').value;
    var dentista_name_input = document.getElementById('dentista_name_input').value;
    var dentista_number_input = document.getElementById('dentista_number_input').value; 

    if (resp_name_input != "" && resp_number_input != "" && dentista_name_input != "" && dentista_number_input!= "") {
        localStorage.setItem('resp_name', resp_name_input);
        localStorage.setItem('resp_number', resp_number_input);
        localStorage.setItem('dentista_name', dentista_name_input);
        localStorage.setItem('dentista_number', dentista_number_input);

        verifyContatos();
        }else{
            erroMessage.style.display = 'block';
    }
    
   
}

function loadContatos(){
    document.getElementById('resp_name').innerHTML = localStorage.resp_name;
    document.getElementById('resp_number').innerHTML = localStorage.resp_number;
    document.getElementById('callResp').setAttribute('href', 'tel:'+localStorage.resp_number);
    document.getElementById('dentista_name').innerHTML = localStorage.dentista_name;
    document.getElementById('dentista_number').innerHTML = localStorage.dentista_number;
    document.getElementById('callDentista').setAttribute('href', 'tel:'+localStorage.dentista_number);
}


function phoneValidation(e){
    var v = e.target.value;
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    // v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    // v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos

    e.target.value = v;
}

function configContatos() {
    contatosContainer.style.display = 'none';
    formContainer.style.display = 'block';

    document.getElementById('resp_name_input').setAttribute('value', localStorage.resp_name);
    document.getElementById('resp_number_input').setAttribute('value', localStorage.resp_number);
    document.getElementById('dentista_name_input').setAttribute('value', localStorage.dentista_name);
    document.getElementById('dentista_number_input').setAttribute('value', localStorage.dentista_number);  
}

function closeErro() {
    document.getElementById('erro').style.display = 'none';
}