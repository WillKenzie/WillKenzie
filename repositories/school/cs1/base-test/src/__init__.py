############################################
# Sample Program 2 - Computer Science 1    #
# Written by William Kenzie                #
############################################

### Part 1 ###
print("Testing mathematics system...")
print(1+1)
print("If you saw '2' above, the mathematics system check has passed")
if 1 + 1 == 2:
	TGREEN =  '\033[32m' # Green Text
	ENDC = '\033[m' # reset to the defaults

	print (TGREEN + "[PASS]" , ENDC)

### Part 2 ###
while(1 == 1):
    inputNum = input("Base2 of what number? ")
    output = 2 ** int(inputNum)
    
    print("Solution: " + str(output))
