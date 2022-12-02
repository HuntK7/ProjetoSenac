export const clue = (ev) =>{    
    let curso = document.getElementById("curso-4");
    let modal = document.getElementById("mo");
    if (!modal.contains(ev.target)){
        modal.style.display = 'none';
        curso.style.display = 'none';
        document.removeEventListener('click', clue, false);
    }
}

// arrow function para fechar o modal caso clique fora

export const kadabra = () =>{
    let curso = document.getElementById("curso-4");
    let modal = document.getElementById("mo");
    curso.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() =>{
        document.addEventListener('click', clue, false)
    }, 200);
}

// arrow function que permite o modal de abrir e colocando uma animação para ele