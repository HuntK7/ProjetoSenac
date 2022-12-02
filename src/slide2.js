export const close = (ev) =>{    
    let curso = document.getElementById("curso-2");
    let modal = document.getElementById("moda");
    if (!modal.contains(ev.target)){
        modal.style.display = 'none';
        curso.style.display = 'none';
        document.removeEventListener('click', close, false);
    }
}

// arrow function para fechar o modal caso clique fora

export const open = () =>{
    let curso = document.getElementById("curso-2");
    let modal = document.getElementById("moda");
    curso.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() =>{
        document.addEventListener('click', close, false)
    }, 200);
}

// arrow function que permite o modal de abrir e colocando uma animação para ele