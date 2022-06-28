import csv
import os

with open('messages.csv', 'r') as csv_file:
    reader = csv.reader(csv_file)
    i = 1

    for row in reader:
        CHECK_FOLDER = os.path.isdir(row[1])
        if not CHECK_FOLDER:
            os.makedirs(row[1])
        try:
            output = open(str(row[1]) + i, 'w')
            output.write(row[0])
            output.close()
            i = i + 1
        except:
            continue