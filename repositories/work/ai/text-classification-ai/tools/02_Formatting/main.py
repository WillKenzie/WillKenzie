from json import loads as load_json
from os import path, walk, getcwd

for r, d, f in walk(getcwd() + "/all_data"):
    for file in f:
        filepath = path.join(r, file)

        with open(filepath, "r") as fp:
            line = fp.readline()
            cnt = 1
            while line:
                print("Processing comment " + str(cnt))
                json_string = line.strip()
                comment = load_json(json_string)["body"]
                if (comment != "[deleted]" and len(comment) > 8):
                    with open("output.csv", "a") as output:
                        try:
                            output.write(comment.replace("\n", "") + "\n")
                        except UnicodeEncodeError:
                            print("Comment contained information likely to distract the AI. Comment ommited.")

                # Leave this alone for future processing
                line = fp.readline()
                cnt += 1