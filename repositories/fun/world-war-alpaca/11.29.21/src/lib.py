from time import sleep
from json import dump, load as undump
from os import name, system

def load(username):
    try:
        return undump(f"saves/{username}.save")
    except FileNotFoundError:
        return {"username":username, "inventory":[], "health":100, "stamina":100, "mission":1}

def save(username, user):
    save = open(f"saves/{username}.save", "w")
    dump(user, save)
    save.close()

def clear():
    if name == 'nt':
        system('cls')
    else:
        system('clear')

def show_user(to_show, time_to_sleep:int=0.5):
    if type(to_show) == list:
        for statement in to_show:
            print(statement)
            sleep(time_to_sleep)
    elif type(to_show) == str:
        print(to_show)
        sleep(time_to_sleep)
    else:
        raise SyntaxError("Function show_user only accepts lists or strings as input")

def ask_user(question:str, answers:dict):
    print(question)
    i = 1
    for key in answers:
        print(f"{i} {key}")
    answer = input("> ")
    if answer.isdigit() and int(answer) < len(answers) + 1:
        answerFunction = answers.keys()[answer - 1]
        answers[answerFunction]()
    elif answer.lower() in answers.keys():
        answers[answer]
    else:
        ask_user(question, answers)