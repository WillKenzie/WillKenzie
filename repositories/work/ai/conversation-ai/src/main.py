from chatterbot import ChatBot

class ENGSM:
    ISO_639_1 = 'en_core_web_sm'
    
chatbot = ChatBot("Cyber",
    tagger_language=ENGSM,
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[
        'chatterbot.logic.BestMatch'
    ],
    database_uri='sqlite:///database.db')


while True:
    response = chatbot.get_response(input("> "))
    print(response)