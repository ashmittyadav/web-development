a=int(input("enter the number:"))           #input from user
def fact(a):                                #function define
    if(a==1 or a==0):                       #check condition
        return 1                            
    else:
        return a*fact(a-1)                  #returning value
print(f"factorial is:",fact(a))             #result print