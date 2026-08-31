const numeroSenha = document.querySelector('parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;

const botoes = document.querySelector('parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
if (tamanhoSenha > 1){
    //tamanhosenha = tamanhosenha-1;
    tamanhoSenha--;
}    
numeroSenha.textcontent = tamanhoSenha;
}
function aumentaTamanho(){
if (tamanhoSenha > 20){
    //tamanhosenha = tamanhosenha+1;
    tamanhoSenha++;
}    
numeroSenha.textcontent = tamanhoSenha;
}

console.log(botoes);
