'''
William Kenzie
Python Quiz
'''


# bottom is the starting number, top is the last nummber
def main(bottom:int, top:int):
    output = []
    while i != top + 1: # The actual WHILE loop
        output.append(bottom)
        bottom = bottom + 1
    return(output)

print(main(2, 256))
