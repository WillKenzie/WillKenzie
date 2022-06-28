from os import system
#################
# Loop Practice #
#################

def number_function():
    # Create the raw list
    try:
        list_of_numbers = []
        total = int(input("How long do you want the list to be? "))
        while (len(list_of_numbers) != total):
            list_of_numbers.append(len(list_of_numbers) + 1)
            print(len(list_of_numbers))
    

        # Get the sum of every number
        try:
            max_wanted = int(input("How many of the numbers do you want to add? "))
            list_total = sum(list_of_numbers[:max_wanted], 0)
            print("The total size of the list is ", list_total)
        except:
            print("That doesn't look like a number...")
    except:
        print("That doesn't look like a number...")

while(True):
    # Clear the terminal and repeat
    system("cls")
    number_function()
    input("Press Enter to continue...")