window.document.writeln('Olá mundo!')
window.document.writeln(window.document.charset)
window.document.writeln(window.navigator.appName)
window.document.writeln(window.document.URL)

var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[0]
//getElementsByTagName está selecionando um elemento por tag, no caso um parágrafo
//('p') está indicando a tag
//[0] indica que será selecionado o primeiro parágrafo, [1] seria o segundo etc
//quando usado Elements no plural

window.document.writeln(p1.innerText)
//window.document.write é o comando para escrever na tela usando js 
//.innerText irá exibir o conteúdo interno da variável p1

p1.style.color = 'blue'
//alterando a cor do p1 para azul

corpo.style.background = 'black'
//alterando a cor de fundo do body

//as alterações de estilo feitas no documento .js sobrepõem as do css


var p2 = window.document.getElementsByTagName('p')[1]
window.document.writeln(p2.innerText)
//.innerText pega o texto sem formatação
window.document.writeln(p2.innerHTML)
//.innerHTML pega o texto formatado

var d = window.document.getElementById('msg')
d.style.background = 'green'
window.document.writeln(d.innerText)
//d.innerText = 'Estou aguardando...'

var d = window.document.querySelector('div#msg')
//usando seleção por seletor
//a div é representada pro #, a classe por .