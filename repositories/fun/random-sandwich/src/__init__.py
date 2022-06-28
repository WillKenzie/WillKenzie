##########################
#     Sandwich Maker     #
# Made by William Kenzie #
##########################
from random import choice
from random import randint
print("Generating your sandwich!")
meats = ["Ham Slices", "Turkey Slices", "Salami", "Bologna", "Roast Beef", "Sausage", "Chicken Slices", "Meatballs"]
cheeses = ["Mozzarella Cheese", "Provolone Cheese", "Cheddar Cheese", "Swiss Cheese", "American Cheese", "Buffalo Cheese", "Pepperjack Cheese"]
vegetables = ["Lettuce", "Tomatoes", "Pickles", "Olives", "Spinage", "Cucumber", "Jalapeno", "Banana Pepper", "Diced Onions"]
sauces = ["Mayonnaise", "Mustard", "Relish", "Chiptole Sauce", "BigMac Sauce", "Ranch", "Hot Sauce", "Barbecue Sauce"]
breads = ["Whole Grain Bread", "White Bread", "Italian Bread", "Wheat Bread", "Flat Bread"]

elements = [meats, cheeses, vegetables, sauces]

sandwich = []
bread = choice(breads)
sandwich.append(bread)

for x in range(4):
    for y in range(randint(0, 6)):
        sandwich.append(choice(choice(elements)))

sandwich.append(bread)

for x in range(len(sandwich)):
    print(sandwich[x])