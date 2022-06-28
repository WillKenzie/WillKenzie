from lib import ask_user, show_user, load
from random import choice
#import story
from extra_data import items

# Title Screen
show_user(["World War Alpaca", "Beta 0.1", "Click Enter to play"], 1)
input()

# Load previous save or create new one
show_user("What is your username?")
username = input("> ")
user = load(username.upper())
user[username] = username


# Main Menu
def play_mission():
    eval(f"mission_{user['mission']}()")


def scavange():
    item_found = choice(items)
    user["inventory"].append(item_found)
    print(f"You found a {item_found.key()}")

ask_user("Main Menu", {"Scavenge":scavange, "Continue Mission":play_mission})