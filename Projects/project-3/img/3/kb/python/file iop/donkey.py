word = "donkey"

with open("donkey_file.txt","r") as f:
    content = f.read()

NewContent = content.replace(word, "####")
with open("donkey_file.txt","w") as f:
    f.write(NewContent)