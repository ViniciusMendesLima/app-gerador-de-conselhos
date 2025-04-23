const botao = document.getElementById("botao");
const tagIdConselho = document.querySelector("#idConselho");
const tagDescriçãoConselho = document.querySelector(".descriçãoConselho");

 botao.addEventListener("click",async ()=>{
    const conselho = await buscarConselho();
    const idDoConselho = conselho.slip.id;
    const descriçãoDoConselho = conselho.slip.advice;
    exibirNovoIdEDescricao(idDoConselho, descriçãoDoConselho);
})

function exibirNovoIdEDescricao(idDoConselho, descriçãoDoConselho) {
    tagIdConselho.innerText = `Advice # ${idDoConselho}`;
    tagDescriçãoConselho.innerText = `"${descriçãoDoConselho}"`;
}

async function buscarConselho() {
    const url = "https://api.adviceslip.com/advice";
    const reposta = await fetch(url);
    return await reposta.json();

}