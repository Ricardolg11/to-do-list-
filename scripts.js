const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listcomplet = document.querySelector('.list-tasks')
let listaDeItens = []


function addNovaTarefa( ) {
    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostraTarefa()
}


function mostraTarefa(){
    let novali = ''

    listaDeItens.forEach( (item, index) => {

        novali = novali + `
        <li class="task ${item.concluida && "done"}">
        <img src="./src/checked.png" alt="chek" onclick="concluirTarefa(${index})" >
        <p class="text">${item.tarefa}</p>
        <img src="./src/trash.png" alt="trash" onclick="deletarItem(${index})" >
        </li>
        `
      
    })

    listcomplet.innerHTML = novali;

    localStorage.setItem('lista', JSON.stringify(listaDeItens))
}

function concluirTarefa(index){
    listaDeItens[index].concluida = !listaDeItens[index].concluida 
    mostraTarefa()
}

function deletarItem(index){
    listaDeItens.splice(index, 1)
    mostraTarefa()
}

function recarregarTarefas(){
    const tarefaslocalstorage = localStorage.getItem('lista')
    if(tarefaslocalstorage){
        listaDeItens = JSON.parse(tarefaslocalstorage);
    }

    mostraTarefa()
}

recarregarTarefas()
button.addEventListener('click', addNovaTarefa)