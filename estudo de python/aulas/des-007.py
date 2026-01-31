import random
numero = random.randint(0, 5) # numero que o computador gerou
tentativa = int(input("Tente:"))
if tentativa == numero :
    print("Parabéns, vc ganhou!")

else :
    print("Tente novamente :(")
