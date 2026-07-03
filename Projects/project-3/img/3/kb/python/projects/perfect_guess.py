from random import randint
computer = randint(1,101)
i = 1
guess = int(input(f"Enter your {i} guess: "))
while(guess != computer):
    if(guess > computer):
        print("Lower")
        guess = int(input(f"Enter your {i+1} guess: "))

    else:
        print("Higher")
        guess = int(input(f"Enter your {i+1} guess: "))

    i = i+1
print(f"you have guessed the number {computer} correctly in {i+1} attempts")
        

