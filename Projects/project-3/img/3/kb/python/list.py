                                #list creation

print("--LIST CREATION--")
list1 = []
n = int(input("enter the range of list : "))
o = input("1)'int' for number list\n2)'str' for word list\nEnter your choice :")
print("enter the items in list")
if o=='int':
    for i in range(0,n):
        elements = int(input(f"Enter the {i+1} element : "))
        list1.append(elements)
else:
    for j in range(0,n):
        elements = input(f"Enter element {j+1} : ")
        list1.append(elements)
print("list:",list1)


                                    #striping 
def slice():   
    x = int(input("enter the starting position of slicing : "))
    y = int(input("enter the ending position of slicing : "))
    lsit1=list1[x:y]
    print(lsit1)                       

                                     #replacing
def replace():
    z = int(input("enter the postion of replacing : "))
    list1[z] = input("Item to replace:")
    print(list1)

                                    #appending
def append():
    l = int(input("Enter the no. of elements to add : "))
    for j in range(0,l):
        element = input(f"Enter the {j+1} element : ")
        list1.append(element)
    print("updated list : ",list1)


                                    #indexing
def indexing():
    m = int(input("Enter the index value : "))
    print(list1[m])

                                    #length
def length():
    print(len(list1))    
                                    #sorting
def sort():
    list1.sort()
    print(list1)
                                    #pop
def pop():
    n = int(input("enter the index to be pop :"))
    list1.pop(n)
    print(list1)
    
                                    #operation on list
k=1
while(k != 0): 
    op=input("Enter the operation to perform:\n1)'1' for slicing\n2)'2' for replacing\n3)'3' for append\n4)'4' for indexing\n5)'5' for length\n6)'6' for sorting\n7)'7' for pop\n8)'8' for sum\nenter the operation : ")

    if op in ('1','2','3','4','5','6','7','8'):
        if op=='1':
            print(slice())
        elif op=='2':
            print(replace())
        elif op=='3':
            print(append())
        elif op=='4':
            print(indexing())
        elif op=='5':
            print(length())
        elif op=='6':
            print(sort())
        elif op=='7':
            print(pop())
        elif op=='8':
            print(sum(list1))
        else:
            print("Invalid Operation")
    nextop = input("Lets do next calculation? (YES/NO) : ")
    if nextop == "no":
        break
    


# list1[0]=input("Enter the item:")         
# list1[i]=input("Enter the item:")
# print(list1)
# print(list1[2].endswith("ana"))

#sum
#remove
#reverse
#insert