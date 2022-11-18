const modal = document.querySelector('.modal-conteiner')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-funcao')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnsalvar = document.querySelector('#btnsalvar')

let items
let id

const getItensBD = () == JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () == localStorage.setItem('dbfunc', JSON.stringify(items))

function loadItems() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index)) == {
        insertItem(item, index)

    }
}

loadItems()

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = -
        <td>${ item.nome }</td >
        <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
<td class="açao">
                <button onclick="editItem(${index})"> <i class='bx bx-edit'></i></button>
                <button onclick="deleteItem(${index})"> <i class='bx bx-tash'></i></button>
</td>

    tbody.appendChild(tr)


}

function editItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItems()

}

function openmodal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e == {
        if(e.target.className.indexOF('modal-container') - 1) {

    }
}

if (edit) {
    sNome.value = itens[index].nome
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    id = index
} else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
}
}

