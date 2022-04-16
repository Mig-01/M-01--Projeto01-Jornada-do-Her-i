
const prompt = require('prompt-sync')();
console.log ('Um nobre rei teve seu castelo invadido, parte de seu tesouro real saqueado e sua filha - princesa Isolda - sequestrada por um poderoso dragão vermelho. O rei desolado, promulgou o seguinte decreto:Eu Rei Lawrence, decreto que busco um cavaleiro corajoso e honrado capaz de coletar as cinco relíquias, resgatar a princesa, por um fim no Dragão e recuperar a parte do tesouro real que foi saqueada. Se ele for capaz dessa proeza, terá a mão da minha filha e metade do tesouro recuperado.' ) 
console.log()

//PRIMEIRA MISSÃO_____________________________________________________
console.log('Primeira Missão: O cavalo de guerra do Rei se perdeu e você deve procurá-lo. Se você achá-lo, o cavalo será seu. Você conseguiu achá-lo?');
let m1 = prompt('Responda apenas sim ou nao:').toLowerCase();
//usamos o while para estabelecer uma mensagem de erro QUANTAS VEZES FOR NECESSÁRIA até que o usuário decida usar uma resposta válida no prompt
while (m1 !='sim'&& m1 != 'nao' ) { 
console.log ("Resposta inválida!")
m1 =prompt('Responda apenas sim ou nao:');
}
// usamos o if para estabelecer a condição necessária para seguir adiante na próxima pergunta. A resposta válida precisa ser digitada APENAS UMA VEZ
if ( m1 =='sim' || m1 == 'nao') {
  console.log()
  console.log ('Segunda Missão: Um grupo de Goblins está aterrorizando uma aldeia nas proximidades do reino. Se conseguir abatê-los, você conseguirá um escudo a prova de chamas.');  
} 
let m2 = prompt('Responda apenas sim ou nao:').toLowerCase();

//__________________________________________________________________________
// SEGUNDA MISSÃO__________________repetimos o while para resposta inválida 


while (m2 !='sim'&& m2 != 'nao' ) { 
console.log ("Resposta inválida!")
m2 =prompt('Responda apenas sim ou nao:');
}
//seguimos com o if para resposta válida carescentando a condição necessária para terceira missão
if ( m2 =='sim' || m2 == 'nao') {
  console.log()//usamos o console.log()(vazio)para inserir a quebra de linha entre uma missão e outra em cada if
console.log ("Terceira Missão: Um grupo de Orc's está assaltando viajantes. Caso consiga derrotar o chefe do bando, você conseguirá uma lança mágica capaz de perfurar couro de dragão. Você consegue derrotá-lo? ");  
} 
let m3 = prompt('Responda apenas sim ou nao:').toLowerCase();

//TERCEIRA MISSÃO_________________________________________________________________

while (m3 !='sim'&& m3 != 'nao' ) { 
console.log ("Resposta inválida!")
m3 =prompt('Responda apenas sim ou nao:');
}

if ( m3 =='sim' || m3 == 'nao') {
  console.log()//usamos o console.log()(vazio)para inserir a quebra de linha entre uma missão e outra em cada if
console.log ("Quarta Missão: Um grupo de mineiros e ferreiros precisam viajar por estradas perigosas. Se conseguir levá-los e trazê-los em segurança, eles te darão uma nova armadura. Você consegue escoltá-los?");  
} 
let m4 = prompt('Responda apenas sim ou nao:').toLowerCase();
//___________________________________________________________________________________________________________________QUARTA MISSÃO____________________________
while (m4 !='sim'&& m4 != 'nao' ) { 
console.log ("Resposta inválida!")
m4 =prompt('Responda apenas sim ou nao:');
}

if ( m4 =='sim' || m4 == 'nao') {
  console.log()
console.log ("Quinta Missão: Um terrível lobisomem está devorando o gado numa fazenda da região. Mate a fera e ganhe um amuleto da coragem, dessa forma você fica imune a aura de terror do dragão! Você consegue dar um fim nessa besta terrível?");  
} 
let m5 = prompt('Responda apenas sim ou nao:').toLowerCase();
console.log()

// ETAPA DE CONTAGEM DE SIM
// criar uma variável para quantidade de sim's
let varesp = 0;
// estabelecer uma condicional para contar acrescentando +1 sim

if (m1 == 'sim'){
  varesp ++
};

if (m2 == 'sim'){
  varesp ++
};

if (m3 == 'sim'){
  varesp ++
};

if (m4 == 'sim'){
  varesp ++
};

if (m5 == 'sim'){
  varesp ++
};

console.log ('Finalmente chegou o momento da batalha final cara a cara com dragão e ...');
console.log()

//E por fim, estabelecer uma condição para cada quantidade de sim's registrado
if (varesp == 0){
  console.log ('Tentou enfrentar o dragão e foi destruído.');
}
else if ( varesp==1 || varesp == 2) {
  console.log ('Você tenta enfrentar o dragão mas não é páreo para o monstro. Não teve outra alternativa a não ser bater em retirada.')
}
else if ( varesp ==3) {
  console.log("Você quase consegue resgatar a princesa mas foi detido pelo dragão e teve que fugir sozinho novamente.") 
}
else if ( varesp ==4) {
  console.log("Sim!Você finalmente consegue resgatar a princesa. Embora consiga resistir ao monstro por um tempo, ele é muito poderoso!Você fugiu da batalha com a princesa e se casou com ela, mas não tomou parte do tesouro real...") 
}
else if ( varesp ==5) {
  console.log("Vida longa ao novo príncipe e herói do reino! Você resgatou a princesa, derrotou o dragão e recuperou parte do tesouro real! Desde agora até o séculos por vir, os bardos cantarão sobre seus feitos heróicos!Você será lembrado pra sempre!") 
};