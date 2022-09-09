var n1, n2, n3, sit, med
n1 = Number.parseInt(prompt("Qual é a sua primeira nota? "))
n2 = Number.parseInt(prompt("Qual é a sua segunda nota? "))
n3 = Number.parseInt(prompt("Qual é a sua terceira nota? "))
med = (n1+n2+n3)/3
sit = med >=7 ? 'Aprovado' : 'Reprovado'
alert(`Sua média é ${med} e sua situação é ${sit}`)
