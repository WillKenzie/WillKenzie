from random import choice, randint
import language_tool_python
from os import system, name


def clear():

    # for windows
    if name == 'nt':
        _ = system('cls')

    # for mac and linux(here, os.name is 'posix')
    else:
        _ = system('clear')


tool = language_tool_python.LanguageToolPublicAPI('en')

# Load all data
my_file = open("adjectives.txt", "r")
adjectives = my_file.readlines()
my_file = open("names.txt", "r")
names = my_file.readlines()
my_file = open("verbs.txt", "r")
verbs = my_file.readlines()
my_file = open("nouns.txt", "r")
nouns = my_file.readlines()


def generateSentence(names_to_use):
    def sentence1():
        return f"{choice(names_to_use)} {choice(nouns)} {choice(verbs)} {choice(nouns)}."

    def sentence2():
        return f"{choice(nouns)} {choice(verbs)} {choice(nouns)}.".replace("\n", "")

    def sentence3():
        return f"{choice(names_to_use)} {choice(adjectives)} {choice(nouns)} {choice(verbs)}s {choice(nouns)}.".replace("\n", "")

    def sentence4():
        return f"{choice(names_to_use)} {choice(verbs)} {choice(adjectives)} {choice(nouns)} {choice(nouns)}."

    sentences = {
        0: sentence1,
        1: sentence2,
        2: sentence3,
        3: sentence4
    }
    return choice(sentences)().replace('\n', '')


def generate_paragraph(names_to_use):
    paragraph = ""
    for i in range(3, 6):
        paragraph = paragraph + " " + generateSentence(names_to_use)
    return paragraph + "\n"

def generate_page(names_to_use):
    page = ""
    for i in range(3, 5):
        page = page + " " + generate_paragraph(names_to_use)
    return tool.correct(page)

def generate_document(names_to_use, pages):
    document = ""
    for i in range(pages):
        document = document + " " + generate_page(names_to_use)
    return document

print(generate_document(names, 6))
