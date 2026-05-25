// MODAL DOS CARROS

function showCar(name, price, details){

document.getElementById('modal').style.display='flex';

document.getElementById('modalTitle').innerHTML = name;

document.getElementById('modalText').innerHTML =
'<strong>Preço:</strong> '+price+'<br><br>'+details+
'<br><br><strong>Consultor:</strong> Lucas Almeida<br><strong>WhatsApp:</strong> (11) 99999-9999';

}

function closeModal(){
document.getElementById('modal').style.display='none';
}

// FORMULÁRIO

document.getElementById('contactForm').addEventListener('submit', function(e){

e.preventDefault();

let name = document.getElementById('name').value;

document.getElementById('modal').style.display='flex';

document.getElementById('modalTitle').innerHTML = 'Mensagem enviada!';

document.getElementById('modalText').innerHTML =
'Obrigado <strong>'+name+'</strong>.<br><br>Nossa equipe comercial entrará em contato em até 15 minutos.<br><br>📞 Central Prime Motors: (11) 4002-8922';

this.reset();

});

// FECHAR MODAL CLICANDO FORA

window.onclick = function(event){

const modal = document.getElementById('modal');

if(event.target == modal){
modal.style.display = 'none';
}

}
