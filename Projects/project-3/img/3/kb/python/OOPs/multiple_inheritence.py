class Employee:
    company = "TCS"
    salary = 123888
    def show(self):
        print(f"The name of the employee is {self.company} and the salary is {self.salary}")


class Coder:
    language = "python"
    def printLanguage(self):
        print(f"Out of all the languages here is your language : {self.language}")
        

class Programmer(Employee, Coder):
    company = "Tata consultancy and services"
    def showLanguage(self):
        print(f"The name is {self.company} and the languge is {self.language}")

a = Employee()
b = Programmer()
# print(a.company, b.company)
b.show()
b.printLanguage()
b.showLanguage()