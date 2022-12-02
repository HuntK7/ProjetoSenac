export const fechar = (ev) =>{    
    let curso = document.getElementById("curso-1");
    let modal = document.getElementById("modal");
    if (!modal.contains(ev.target)){
        modal.style.display = 'none';
        curso.style.display = 'none';
        document.removeEventListener('click', fechar, false);
    }
}

// arrow function para fechar o modal caso clique fora

export const abrir = () =>{
    let curso = document.getElementById("curso-1");
    let modal = document.getElementById("modal");
    curso.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() =>{
        document.addEventListener('click', fechar, false)
    }, 200);
}

// arrow function que permite o modal de abrir e colocando uma animação para ele