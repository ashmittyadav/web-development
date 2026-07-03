class Employee:
    company = "TCS"
    def show(self):
        print(f"The name of the employee is {self.name} and the salary is {self.salary}")
        

class Programmer(Employee):
    company = "Tata consultancy and services"
    def showLanguage(self):
        print(f"The name is {self.name} and the languge is {self.language}")

a = Employee()
b = Programmer()
print(a.company, b.company)