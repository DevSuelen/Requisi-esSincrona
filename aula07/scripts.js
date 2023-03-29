function buscarRegioes()
{
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes") //por padrão a requisição é get
    .then(resposta => resposta.json()) // resolve o json
    .then(resposta => {
        resposta.forEach(function (regiao){
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
        })
    })// preenche o select
        
    

}buscarRegioes();


function buscarEstados()

{
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiões.value}/estados?orderBy=nome')
.then(resposta => resposta.json())
.then(resposta => {
    estados.innerHTML = "";
    resposta.forEach(functionc(estado){
    estados.innerHTML += `<option value="${estado.id}">$(estado.nome}</option>`;

    })
})
}

function buscarCidades()
{
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')