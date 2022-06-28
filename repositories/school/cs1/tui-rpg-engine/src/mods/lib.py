from math import floor
from time import sleep
from random import randint
from colorama import init, Fore, Style
from traceback import format_exc
import json
import logging
from tkinter import *


init()
items = {}
logging.basicConfig(filename=".log")
window = Tk()
window.title = "World War Alpaca"
message_window = Text(window, height=10)
message_window.pack()
choices_window = Listbox(window, height=3)
choices_window.pack()

"""
1 = Legendary
2 = Epic
3 = Rare
4 = Common
5 = Typical
10 = Garbage
"""
def add_item(name, damage, rarity):
    for x in range(rarity):
        items[name] = damage

def close(user):
    print("Saving...")
    with open("user.save", "w") as outfile:
        json.dump(user, outfile)
    exit()

def display_text(text, pause = 0.5):
    message_window.insert(INSERT, text + "\n")
    sleep(pause)


def query_fail(options, user):
    display_text(
        Fore.RED + "I" +
        Fore.LIGHTRED_EX + "n" +
        Fore.RED + "v" +
        Fore.LIGHTRED_EX + "a" +
        Fore.RED + "l" +
        Fore.LIGHTRED_EX + "i" +
        Fore.RED + "d" +
        Fore.LIGHTRED_EX + " c" +
        Fore.RED + "h" +
        Fore.LIGHTRED_EX + "o" +
        Fore.RED + "i" +
        Fore.LIGHTRED_EX + "c" +
        Fore.RED + "e \n" +
        Fore.RESET
        )
    query_user(options, user)

def query_user(options, user):
    def check_selection():
        selection = choices_window.curselection()[0]
        options.get(selection)(user)

    submit = Button(window, text ="Submit", command=check_selection)
    submit.pack()

    sleep(1)
    options["combust into flames"] = close
    for key in options:
        choices_window.insert(END, "* " + key)
