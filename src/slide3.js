export const fecha = (ev) =>{    
    let curso = document.getElementById("curso-3");
    let modal = document.getElementById("mod");
    if (!modal.contains(ev.target)){
        modal.style.display = 'none';
        curso.style.display = 'none';
        document.removeEventListener('click', fecha, false);
    }
}

// arrow function para fechar o modal caso clique fora

export const abra = () =>{
    let curso = document.getElementById("curso-3");
    let modal = document.getElementById("mod");
    curso.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() =>{
        document.addEventListener('click', fecha, false)
    }, 200);
}

// arrow function que permite o modal de abrir e colocando uma animação para ele