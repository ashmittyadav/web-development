class Calculator:
    def __init__(self, n):
        self.n = n

    def square(self):
        print(f"The square is {self.n*self.n}")
    
    def cube(self):
        print(f"The cube is {self.n*self.n*self.n}")

    def square_root(self):
        print(f"The square root is {self.n**1/2}")

    def cube_root(self):
        print(f"The cube root is {self.n**1/3}")
a = Calculator(8)        
a.square()
a.cube()
a.square_root()
a.cube_root()
        