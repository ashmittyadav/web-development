import random

def game():
    print("You are playing a game...")
    score = random.randint(1,50)
    #fetch the hiscore
    with open("hiscore.txt","r") as f:
        hiscore = f.read()
        if(hiscore != ""):
            hiscore = int(hiscore)
        else:
            hiscore = 0
    print(f"your score is : {score}")
    if(score>hiscore):
        with open("hiscore.txt","w") as f:
            f.write(str(score))
    return score


game()