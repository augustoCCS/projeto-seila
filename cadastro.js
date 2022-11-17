var dados = []

function populatabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(Dados))

        $("#tbldados tbody").html("")

        dados.forEach(function (item) {
            //template string
            $("#tbldados tbody").append(`<tr>
             <td>${item.ID}</td>
             <td>${item.nome}</td> 
             <td>${item.nascimento}</td> 
             <td>${item.RG}</td> 
             <td>${item.CNPJ}</td> 
             <td>${item.cidade}</td> 
             <td>${item.telefone}</td>  
             <td>${item.e - mail}</td>
            </tr>`)
        })
    }
}

$(function () {
    //executa ao carregar da tela
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        populatabela()
    }

    $("#btnsalvar").click(function ()

        let, nome = $("#txtnome").val(),
        let, nascimento = new date($("#txtnascimento").val()).ToLocaleDateString("pt-br"), { timezone: "UTC" })
        let, CNPJ = $("txtcnpj").val(),
        let email = $("txtemail").val(),
        
        let registro = {}

    registro.nome = nome
    registro.nascimento = nascimento
    registro.CNPJ = CNPJ
    registro.email = email

    registro.ID = dados.length + 1
    
    dados.push(registro)

    alert("registro salvo com susseso")
    $("#modalregistro".modal("hide"))

    $("#txtnome").val("")
    $("#txtnascimento").val("")
    $("#txtcnpj").val("")
    $("#txtemail").val("")
    
    populatabela()

})
        