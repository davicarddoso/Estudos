# Dissecanfo uma variavel
info = input("Digite algo:")
print("Ele é um tem letras e numeros, ou so numeros?", info.isalnum())
print("Ele possui apenas letras?", info.isalpha())
print("Ele é decimal?", info.isdecimal())
print("Ele é numerico", info.isnumeric())
print("Ele pode começar uma variavel?", info.isidentifier())
