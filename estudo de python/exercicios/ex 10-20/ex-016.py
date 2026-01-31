from math import trunc
numero = float(input("Digite seu numero:"))
inteiro = numero.__trunc__()
print("A parte inteira de {:.3f} é {}".format(numero,inteiro))