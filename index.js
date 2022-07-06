// Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, exibirá um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que tiveram que ser cumpridos durante a jornada, por exemplo: “Você conseguiu encontrar a Espada Mágica da Chama da Estrela do inverno?”, “Você conseguiu consertar os reatores nucleares do motor de dobra?”, “Você se lembrou de passar no mercado e comprar óleo?”
// No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:
// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado conforme as situações acima.
// Para hoje
// Para hoje você deve:
// Construir o rascunho da sua história
// Criar as variáveis com o prompt para fazer as perguntas e receber as respostas
// Exibir ao final o valor de cada uma das respostas

const prompt = require('prompt-sync')()

console.log(
  'Você estava jogando um mmorpg quando derrepente foi inovocado como herói para o mundo do game. Para cumprir a missão para qual foi invocado e poder voltar ao para o seu mundo você precisa salvar a princesa do reino.Mas, você dispõe apenas de um escudo com diversas magias de proteção, ele não sai do seu braço e quando você tentar usar qualquer outra arma sofre com terríveis descargas elétricas................................\n'
)

let questionOne = prompt(
  '.....Tentando pensar no que fazer você se depara com um mercador de escravos que te oferece uma espadashim demiHumana por 150 dinares. Esse dinheiro é tudo o que você tem e Raphtalia, a menina demiHumana, é uma criança doente que necessita de muitos cuidados. Você aceita a proposta do mercador de escravos? [sim/nao] \nR: '
)

if (questionOne == 'SIM') {
  console.log(
    '\nRaphtalia se tornou sua serva e recebeu a benção do herói fazendo-a evoluir. Ela foi completamente curada, agora ela é uma linda demiHumana adulta e prometeu lutar ao seu lado para sempre como sua espada.'
  )
} else if (questionOne == ['NAO', 'NÃO']) {
  console.log(
    '\nVocê perdeu a oportunidade de ter uma ótima guerreira ao seu lado'
  )
}

console.log('\n===================================\n')

let questionTwo = prompt(
  'Você foi para uma cidade em outro reino, mas seu dinheiro esta acabando e você precisa de recursos para encontrar a princesa. Você se depara com anúncio de uma corrida de montaria com prémio milhonário, mas com o que tem só dá para disputar montado um filolial teimoso, uma ave parecida com um avestruz, enquanto os outros competidores estão no que parecem ser velociraptors. Você participa da disputa? [sim/nao] \nR:'
).toUpperCase()

if (questionTwo == 'SIM') {
  console.log(
    '\nParabéns você ganhou a corrida e recebeu o premio de 500000 dinares. Além dissos, devido a benção do héroi, sua filolial se transformou em uma menina com asas chamada Filo. Ela se tornou a rainha filolial.'
  )
} else if (questionTwo == ['NAO', 'NÃO']) {
  console.log('\nVocê perdeu a oportunidade de ganhar muito dinheiro')
}

console.log('\n===================================\n')

let questionThree = prompt(
  'Um passaro negro gigante esta atacando um pequeno vilarejo chamado Lazar e sabendo que você é um herói clamaram por ajuda. Você os ajuda e o enfreta mesmo sem ter magias de ataque? [sim/nao] \nR:'
).toUpperCase()

if (questionThree == 'SIM') {
  console.log(
    '\n Filo se transformou em um Filolial Gigante com garras mortais e, sob a proteção do seu escudo, derrotou o passaro negro. Os aldeões do vilareijo ficaram muito felizes, fizeram uma grande e ao final das comemorações te contaram de uma senhora na cidade de Nirf que dizia saber quem sequestrou a princesa.'
  )
} else if (questionThree == ['NAO', 'NÃO']) {
  console.log('\nO vilarejo foi completamente destruido!')
}

console.log('\n===================================\n')

let questionFour = prompt(
  ' Você foi para a cidade de Nirf em busca de alguem que possa te dar pistas da princesa. Você encontrou uma senhora que sabe de algo, mas ela é uma demiHumana e não fala a lingua dos humanos. Deseja tentar falar com ela mesmo assim? [sim/nao] \nR:'
).toUpperCase()

if (questionOne == 'SIM' && questionFour == 'SIM') {
  console.log(
    '\n Raphtalia fez o papel de tradutora!\nParabéns! Agora você já sabe onde a princesa está e tem duas fortes aliadas para lhe ajudar a regata-la.'
  )
}

console.log('\n===================================\n')

let questionFive = prompt(
  'Você já sabe onde a princesa está, mas para salva-la tem que responder a seguinte pergunta: Você Já assistiu Tate no Yūsha no Nariagari (The Rising of the Shield Hero)? [sim/nao] \nR:'
).toUpperCase()
console.log()

let count = 0

if (questionOne === 'SIM') {
  count += 1
}
if (questionTwo === 'SIM') {
  count += 1
}
if (questionThree === 'SIM') {
  count += 1
}
if (questionFour === 'SIM') {
  count += 1
}
if (questionFive === 'SIM') {
  count += 1
}

if (count === 0) {
  console.log(
    'Durante suas aventuras para encontrar a princesa você se deparou com um dragão zumbi que te amaldiçou com a loucura eterna. Sob esse feitiço você voltou ao reino que te invocou e o destrui completamente, matando a todos com o escudo da furia. Após a destuição total você foi completamente consumido pelo odio e morreu!'
  )
}
if (2 <= count >= 1) {
  console.log('Você não conseguiu achar a princesa')
}

if (count === 3) {
  console.log('Você achou a princesa mas...')

  if (questionOne != 'SIM') {
    console.log(
      'não conseguiu derrotar o dragão zumbi que a fazia de refém. Faltou a força de Raphtalia ao seu lado'
    )
  } else if (questionTwo != 'SIM') {
    console.log(
      'não conseguiu derrotar o dragão zumbi a velocidade da Filo, a rainha filolial, para te ajudar.'
    )
  }
}

if (count === 4) {
  console.log(
    'Você Encontrou a princesa, mas não conseguiu derrotar o dragão zumbi que a fazia refém. O dragão ficou irado e destruiu a cidade de Nirf.'
  )
}
if (count === 5) {
  console.log(
    'Parabéns!!!\nVocê encontrou a princesa e, junto de Raphtalia e Filo, derrotou o Dragão zumbi que a fazia refém.'
  )
}
