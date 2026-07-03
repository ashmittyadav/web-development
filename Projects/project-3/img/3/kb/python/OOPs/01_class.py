class Employee:
    language = "py"        # class attribute
    salary = 1800000
    
    def __init__(self, name, language, salary):     # dunder method is automatically called
        self.name = name
        self.language = language
        self.salary = salary
        print("i am creating an object")

    def getinfo(self):     # self is given as positional argument
        print(f"The language is {self.language}. The salary is {self.salary}")

    @staticmethod                   # positional argument is not required
    def greet():
        print("good morning")
ash = Employee("ashmit", "javascript", 1800000)        # object attribute
# ash.name = "ashmit"     #instance attribute
print(ash.name,ash.language,ash.salary)
ash.getinfo()
Employee.getinfo(ash)       # positional arghument
ash.greet()
Employee.greet()