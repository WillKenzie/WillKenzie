import pandas as pd
from os import walk
  
filenames = next(walk("toChange"), (None, None, []))[2]
for file in filenames:
    print(file)
    df1 = pd.read_json("toChange/" + file)
    df1.to_csv(file+".csv",index=False)
