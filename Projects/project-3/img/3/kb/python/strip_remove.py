# strip + remove
def rem(l,word):
    n = []
    for item in l:
        if not(item == word):
            n.append(item.strip(word))
    return n
l = ["ashmit", "kritika", "sandli"]
print(rem(l,"it"))