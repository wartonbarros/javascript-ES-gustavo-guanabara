var nome = window.prompt('Qual é o seu nome?')
document.writeln(`Seu <strong>nome</strong> tem ${nome.length} letras</br>`)
//podemos usar tags html dentro das declarações de string
//variávelString.length exibirá o número de caracteres da palavra ou texto

document.writeln(`Seu nome em maiúsculas é ${nome.toUpperCase()}</br>`)
//.toUpperCase converterá o texto da variável para maiúsculo

document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}</br>`)
//.toLowerCase converterá o texto para minúsculo

var n1 = 1545.5
document.writeln(n1.toFixed(3))
//podemos usar o .toFixed para definir quantas casas decimais queremos no exibir no resultado

document.writeln(n1.toFixed(2).replace('.' , ','))
//podemos usar o .replace para substituir caracteres por outros simbolos

document.writeln(n1.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'}))
//linha que define o número por local, e para real do brasil
