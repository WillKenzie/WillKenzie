from os import system
from colorama import init, Fore
init()

system("cls")
system("clear")
print(Fore.LIGHTRED_EX + " __          __        _     _  __          __                   _                       ")
print(Fore.RED         + " \ \        / /       | |   | | \ \        / /             /\   | |                      ")
print(Fore.LIGHTRED_EX + "  \ \  /\  / /__  _ __| | __| |  \ \  /\  / /_ _ _ __     /  \  | |_ __   __ _  ___ __ _ ")
print(Fore.RED         + "   \ \/  \/ / _ \| '__| |/ _` |   \ \/  \/ / _` | '__|   / /\ \ | | '_ \ / _` |/ __/ _` |")
print(Fore.LIGHTRED_EX + "    \  /\  / (_) | |  | | (_| |    \  /\  / (_| | |     / ____ \| | |_) | (_| | (_| (_| |")
print(Fore.RED         + "     \/  \/ \___/|_|  |_|\__,_|     \/  \/ \__,_|_|    /_/    \_\_| .__/ \__,_|\___\__,_|")
print(Fore.LIGHTRED_EX + "                                                                  | |                    ")
print(Fore.RED         + "                                                                  |_|                    ")
print(Fore.RESET)

print("v0.3.5 - InDev")
print(Fore.BLUE + " ! This build is experimental !" + Fore.RESET)
from mods.root import main
main()
