nome = str(input("Digite seu nome completo:"))
upper = nome.upper()
lower = nome.lower()
tmhn = len(nome.replace(" ", "")) -1
palavra = nome.split()[0]
contagem = len(palavra)
print("Seu nome em letras maiusculas: {}".format(upper))
print("Seu nome em letras minusculas: {}".format(lower))
print("O tamanhon do seu nome: {}".format(tmhn))
print("Quantas letras tem seu primeiro nome: {}".format(contagem))