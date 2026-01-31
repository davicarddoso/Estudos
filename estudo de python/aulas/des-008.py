# O objetivo desse desafio é perguntar o valor do emprestimo, o salario e quantos anos a pessoa quer pagar.
# O valor da prestaçao não pode exeder 30% do salario do usuario
# O Programa vai verificar quantas pretaçaoes vão ser pagas e quanto é 30% do salario
# Depois ele vai verficar se a prestação não exede os 30%, se não exeder ele vai permitir o emprestimo
# se não, ele vai negar. 
valor_casa = float(input("Qual o valor da casa? "))
salario = float(input("Qual seu salário? "))
anos = int(input("Quantos anos vc deseja pagar a casa? "))

prestacao = float((anos * 12) / valor_casa)
maximo = float(salario * 0.30)
if prestacao > maximo :
    print("Infelizmente a prestaçao exede 30% do seu salario")
else :
    print("Seu emprestimo foi aceito!")