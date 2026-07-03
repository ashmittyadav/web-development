f = open("myfile.txt","r")
lines = f.readlines()           # returns list
print(lines,type(lines))
f.close()
f = open("myfile.txt")
line = f.readline()
while(line != ""):
    print(line,type(line))
    line = f.readline()
f.close()