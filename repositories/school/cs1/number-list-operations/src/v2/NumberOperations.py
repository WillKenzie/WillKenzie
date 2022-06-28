'''
William Kenzie
Python Quiz
'''

def main(input_list:list):
    output_list = []
    for number in input_list:
        try:
            if number % 2 or number % 3:
                continue
            else:
                output_list.append(number)
        except:
            continue
    return output_list
