def main():
    try:
        a =int(input("Hey, Enter a number: "))
        print(a)
        return
        

    except Exception as e:
        print(e)
        return
    
    finally:           # always executed   # use when values are returned in try or except in a function
        print("i am inside finally")
        
main()