try:
    a =int(input("Hey, Enter a number: "))
    print(a)

except Exception as e:
    print(e)

else:           # only if try is executed
    print("i am inside else")