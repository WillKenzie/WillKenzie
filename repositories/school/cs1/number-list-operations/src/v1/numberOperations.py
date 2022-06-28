def main():

    inputList = [1, 2, 3]
    output = []

    for item in inputList:
        oore = item % 2
        if oore == 1:
            output.append(item * 3 + 1)
        else:
            output.append(item / 2)

    return output

print(main())
