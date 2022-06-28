#################
# Loop Practice #
#################

# Create the raw list
list_of_numbers = []
while (len(list_of_numbers) != 100):
    list_of_numbers.append(len(list_of_numbers) + 1)

# Get the sum of every number
list_total = sum(list_of_numbers, 0)
print(list_total)