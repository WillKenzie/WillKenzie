from random import choice
numbers = {
        "Ace":13,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "10":10,
        "Jack":13,
        "King":13,
        "Queen":13
    }

def get_deck():
    cards = []
    suits = ["hearts", "diamonds", "spades", "clubs"]

    for suit in suits:
        for number in numbers.keys():
            cards.append("{number} of {suit}".format(number=number, suit=suit))
    
    return cards

def get_hand(cards, handSize):
    hand = []
    for x in range(1, handSize):
        hand.append(choice(cards))

    return hand

def is_card_stronger(card1, card2):
    strength1 = card1.split(" of ")[0]
    strength2 = card2.split(" of ")[0]
    if numbers[int(strength1)] == numbers[int(strength2)]:
        return "WAR"
    else:
        return numbers[int(strength1)] > numbers[int(strength2)]