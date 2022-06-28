from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import csv
from os import walk

class ENGSM:
    ISO_639_1 = 'en_core_web_lg'

chatbot = ChatBot("Cyber",
    tagger_language=ENGSM,
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[
        'chatterbot.logic.BestMatch'
    ],
    database_uri='sqlite:///database.db')

# Search through `onboarding` to find models to load
filenames = next(walk("onboarding"), (None, None, []))[2]

trainer = ListTrainer(chatbot)

print(filenames)
for filename in filenames:
    if filename.split(".")[1] == "csv":
        with open("./cache", "r") as cache:
            file = filename.split(".")[0]
            if not (file in cache):
                print("./onboarding/" + file + '.details')
                with open("./onboarding/" + file + '.details', 'r') as details:
                    detailsC = details.read()
                    with open("./onboarding/" + file + '.csv', 'r') as read_obj:
                        reader = csv.reader(read_obj)
                        conversation = []
    
                        for i in list(reader):
                            print(i[int(detailsC)])
                            conversation.append(i[int(detailsC)][:131070])
    
                        trainer.train(conversation)
                        with open("./cache", "a") as cache:
                            cache.write(file)
                
print("Training complete: Copy database.db to the folder housing the chatterbot instance")
