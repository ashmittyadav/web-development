def myFunc():
    print("Hello World!")

myFunc()
print(__name__)

if __name__ == "__main__":
    print("main file running this code")
else:
    print("code is imported")