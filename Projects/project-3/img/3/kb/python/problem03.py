letter = '''Dear <|Name|>,
You are selected!
<|Date|> '''
x = input("Enter the name :")
y = input("Enter the date :")
res = letter.replace("<|Name|>",x).replace("<|Date|>",y)
print(res)

print(res.find("as"))                  # find function return the index of value found  

if "as" in res:                         # in function return the value to print
    print("yes")
    print(res.replace("as","kr"))
print(letter)               #strings are immutable