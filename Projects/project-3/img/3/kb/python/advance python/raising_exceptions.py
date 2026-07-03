try:
    a = int(input("enter the first number: "))
    b = int(input("enter the second number: "))
    if(b == 0):
        raise ZeroDivisionError("Hey our program is not meant to divide numbers by zero")
    else:
        print(f"the division of {a} and {b} = {a/b}")
except ValueError:
    print("please enter valid integer\nThank you")
