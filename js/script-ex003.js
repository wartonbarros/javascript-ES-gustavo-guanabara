var n1 = Number.parseInt(window.prompt('digite um número inteiro!'))
    var n2 = Number.parseInt(window.prompt('digite outro número inteiro!'))
    //window.prompt sempre retorna uma string, mesmo que seja digitado um número 
    //Number.parseInt ou Number.parseFloat converte o conteúdo em numeral
    //caso não seja feita a conversão o conteúdo de n1 e n2 serão apenas concatenados

    var soma = n1 + n2
    window.alert('A soma dos valores é ' + soma)

    //+ pode ser usado para adição ou para concatenação

    var n3 = Number.parseFloat(window.prompt('digite um número com ponto flutuante!'))
    var n4 = Number.parseFloat(window.prompt('digite outro número com ponto flutuante!'))

    var soma2 = n3 + n4
    window.alert('A soma dos valores é ' + soma2)
    //usando o Number.parseFloat para conversão com ponto flutuante

    var n5 = Number(window.prompt('digite um número qualquer'))
    var n6 = Number(window.prompt('digite outro número qualquer'))
    var soma3 = n5 + n6
    window.alert('A soma dos valores é ' + soma3)

    //nas versões mais recentes do ECMAScript pode-se usar apenas Number e o javaScript 
    //decide como fazer a conversão

    //para converter para string pode-se usar apenas String(n)
    //n.toString() pode ser usado para adicionar antes o conteúdo adicionando como tipo String

    var s = n5 + n6
    window.alert('palavra' + s.toString())
    window.alert('palavra' + String(s))
    //convertendo um numeral para String com .toString ou String()


    var nome = 'Gustavo'
    var idade = 16
    var nota = 5.5

    document.write(`O aluno ${nome} com ${idade} anos tirou a nota ${nota}`)
    //podemos usar ${variável} para exibir valores de variáveis sem usar concatenação
    //template string
