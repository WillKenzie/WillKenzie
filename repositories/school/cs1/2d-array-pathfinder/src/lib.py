from random import randint

class Array_2D:
    # Set all the global variables
    class_array = []
    empty_char = ""
    start_char = ""
    end_char = ""
    barricade_char = ""
    path_char = ""
    total_rows = 0
    total_columns = 0


    # Get the display
    def display(self, pretty:bool = False):

        if pretty == False:
            return self.class_array
        else:
            return str(self.class_array).replace("], [", "\n").replace("'", "").replace(",", "")\
            .replace('[[', '').replace(']]', '')

    # Get all rows
    def rows(self, row_number:int):
        return self.class_array[row_number]
    
    # Get all columns
    def columns(self, column_number:int):
        output = []
        for row in range(len(self.class_array)):
            output.append(self.class_array[row - 1][column_number])
        return output

    # Insert a value into the array
    def insert(self, row:int, column:int, to_insert:str):
        try:
            self.class_array[row-1][column-1] = to_insert
            return True
        except:
            return False

    def delete(self, row:int, column:int):
        self.insert(row, column, self.empty_char)
        return True

    # Configure the 2D Array
    def __init__(self, rows:int, columns:int, fill_random:bool=False, set_path:bool=False, 
    empty_char:str="0", start_char:str="2", end_char:str="3", barricade_char:str="1", path_char:str="."):
        # Set all of the variables
        self.empty_char = empty_char
        self.start_char = start_char
        self.end_char = end_char
        self.barricade_char = barricade_char
        self.path_char = path_char
        self.total_rows = rows
        self.total_columns = columns

        # Make all the columns
        for row in range(rows):
            self.class_array.append([])
            
            # ERROR: Following code won't work due to empty list needed?
            for column in range(columns):
                self.class_array[row].append(empty_char)

        if fill_random:
            # Fill it with random barricades
            for run in range(randint(0, rows-1) * randint(0, columns-1)):
                self.insert(randint(0, rows-1), randint(0, columns-1), barricade_char)
        
        if set_path:
            # Set the start and finish
            self.start_row = randint(0, rows-1)
            self.start_column = randint(0, columns-1)
            self.insert(self.start_row, self.start_column, start_char)
            self.insert(randint(0, rows-1), randint(0, columns-1), end_char)
        
    def find_path(self):
        def basic_rundown(self, row_position:int, column_position:int, iteration_number:int, list_to_check:list, step:int):
            token = str
            i = 1
            while token != self.barricade_char or token != self.end_char:
                iteration_number = 0
                token = list_to_check[i]
                self.insert(row_position, column_position, step)
            if token == self.barricade_char:
                return find_in_column(row_position, column_position, iteration_number + 1, step + 1)
            elif token == self.end_char:
                return [(row_position, column_position), self.previous_versions[-1]]

        def find_in_row(self, row_position:int, column_position:int, iteration_number:int, step:int):
            if iteration_number > 5:
                return False
            row = self.rows(row_position)
            basic_rundown(self, row_position, column_position, iteration_number, row, step + 1)
            
        def find_in_column(self, row_position:int, column_position:int, iteration_number:int, step:int):
            if iteration_number > 5:
                return False
            column = self.columns(column_position)
            basic_rundown(self, row_position, column_position, iteration_number, column, step + 1)

        path = find_in_row(self, self.start_row, self.start_column, 0, 0)
        if path:
            return path
        else:
            path = find_in_column(self, self.start_row, self.start_column, 0, 0)
            if path:
                return path
            else:
                return None


ThisArray = Array_2D(10, 10, True, True)
ThisArray.find_path()
print(ThisArray.display(True))