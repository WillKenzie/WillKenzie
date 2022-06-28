from random import randint

def main():
    streak = 0

    while streak != -1:
        print("Guess heads or tails!")
        choice = randint(0, 1)
        userChoice = input(">")
        if userChoice.lower() == "heads":
            userChoice = 0
        elif userChoice.lower() == "tails":
            userChoice = 1
        else:
            print("Invalid choice")

        if choice == userChoice:
            streak = streak + 1
            print("You got it right! Nice!")
            print("Current streak:", streak)
        else:
            print("You lost your streak!")
            streak = -1

if __name__ == '__main__':
    main()
