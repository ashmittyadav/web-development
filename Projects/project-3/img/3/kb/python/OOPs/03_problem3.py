class Demo:
    a = 4

object = Demo()
print(object.a)  # print class attribute as instance attribute is not present
object.a = 0        # instance attribute is set
print(object.a)     # print instance attribute but does not change the class attribute
print(Demo.a)       # always prints the class attribute as class is associated with a
