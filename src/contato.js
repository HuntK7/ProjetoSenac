document.getElementById('contato').addEventListener('click', function(ev){
    ev.preventDefault()

    const nome = document.getElementById("nome").value
    const tel = document.getElementById("telefone").value
    const email = document.getElementById("email").value

    if(nome == ""){
        alert("Precisa Insirir um nome")
    }
// Se o nome for igual uma string vazia ele não irá aceitar
    else if(tel == ""){
        alert("Um telefone precisa ser insirido")
    }
// Se o telefone for igual uma string vazia ele não irá aceitar
    else if(email == ""){
        alert("É necessário insirir um email")
    }
// Se o email for igual uma string vazia ele não irá aceitar
    else{
        alert("Obrigado por ter entrado em contato conosco, assim que possível iremos retornar por e-mail ou telefone.")
    }
})

// Função ligada há um botão que permite alertar o usário após apertar o botão