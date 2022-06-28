'''
William Kenzie
Python Quiz
'''

from random import randint

def flip_coin(guess, streak):
    random_number = randint(0, 1)
    if guess.lower() == "tails" and random_number == 0:
        return True
    elif guess.lower() == "heads" and random_number == 1:
        return True
    else:
        streak = streak + 1
        return streak

def main():
    streak = 0
    result = False
    while result != True:
        print("A coin has been flipped, is it heads or tails?")
        result = flip_coin(input("> "), streak)
        if result == True:
            print("Congrats! That took", streak, "tries!")
        else:
            streak = result
    
if __name__ == '__main__':
    main()
