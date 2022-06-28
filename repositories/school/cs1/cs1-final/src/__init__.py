def A1_AND(a,b):
    'Returns True/False based on inputs for AND gate'
    return (a and b) == True


def A2_OR( a,b):
    'Returns True/False based on inputs for OR gate'
    return (a or b) == True


def A3_NAND( a,b):
    'Returns True/False based on inputs for NAND gate'
    return (not(a and b)) == True


def A4_NOR( a,b):
    'Returns True/False based on inputs for NOR gate'
    return (not(a or b)) == True


def A5_XOR( a,b):
    'Returns True/False based on inputs for XOR gate'
    return (a != b) == True


def A6_XNOR( a,b):
    'Returns True/False based on inputs for XNOR gate'
    return (a == b) == True


def A7_GraphNxN(x, y):
    'Returns a 2D graph that is of size n by n'
    graph = []
    while len(graph) != x:
        col = []
        while len(col) != y:
            col.append(0)
        graph.append(col)
    return graph

def main():
    'The main performs the program when executed.'
    B1_TruthTable = A7_GraphNxN(6, 4)

    def C1_FillTruths(row, function):
        ' Fills the truth table with the operators result '

        B1_TruthTable[row][0] = function(0, 0)
        B1_TruthTable[row][1] = function(0, 1)
        B1_TruthTable[row][2] = function(1, 0)
        B1_TruthTable[row][3] = function(1, 1)

    C1_FillTruths(0, A1_AND)
    C1_FillTruths(1, A2_OR)
    C1_FillTruths(2, A3_NAND)
    C1_FillTruths(3, A4_NOR)
    C1_FillTruths(4, A5_XOR)
    C1_FillTruths(5, A6_XNOR)

    print(str(B1_TruthTable).replace("[[", "").replace("]]", "").replace("], [", "\n").replace(",", "  "))


if __name__ == '__main__':
    main()
