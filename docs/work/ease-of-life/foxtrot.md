# Welcome to Foxtrot
Foxtrot is a simple utility for managing monorepositories. This guide will show you how to install, use, and configure Foxtrot for your needs. This guide will make the assumption that you have Git installed and that you want to use the WilliamKenzie monorepository. If you do not want to use the WilliamKenzie monorepository, replace the repository URL with your own.

## Installation
Install Foxtrot on Linux or MacOS with the following commands:
```
sudo -i
cd /bin
wget https://raw.githubusercontent.com/willkenzie/willkenzie/main/tools/foxtrot
chmod +x foxtrot
exit
```
These commands will make you superuser, move to the global installation PATH, download Foxtrot, and make it executable, then leave the superuser shell. MacOS installation is significantly more difficult due to the locked-down nature of MacOS, and the only solution I know of is to have a jailbroken Mac. I am not licensed to create an easy-install for MacOS.



Install Foxtrot on Windows with the following commands in a Administrative Powershell:
```
cd C:/Windows
curl https://raw.githubusercontent.com/willkenzie/willkenzie/main/tools/foxtrot -o foxtrot.py
```
These commands will move to the global installation PATH, download foxtrot, and then you're done. For Windows, you will need to install Python 3.9 on the machine. **Instead of just typing foxtrot, you will have to type "foxtrot.py" in the command line.**

## Usage
First and foremost, you want to get Foxtrot up and running. Thankfully, it works out of the box. The default configuration will automatically pull from the WilliamKenzie repository, so no fiddling with configuration. Yay! Keep in mind, Git will need to be installed regardless, as will Python 3.9 (Although on Linux that is typically installed by default)


Let's start by pulling a sample project. Why not Foxtrot itself? Run the following command:
```
foxtrot -a work/ease-of-life/foxtrot
```
This command added the category Work, the subcategory Ease of Life, and the project Foxtrot. If you wanted just the Work projects, just type "work". If you wanted Ease of Life projects, type "work/ease-of-life". Foxtrot works on tree paths, so it knows what it needs to pull.
If you want to pull a group, just type the path for that group. If you want to pull a specific file, you can pull that exact file. If you want to pull all the projects, just type "/"!


Now lets say you made some changes to your repository and want to update the origin. How would you go about this in Foxtrot? Well, it's actually easier than Git. Just type the following command.
```
foxtrot -u
```
This command will update the entire monorepository. What about commits, adding files, etc? Well, Foxtrot handles all of that for you. Foxtrot assumes you want to add all the files, unless they are in your gitignore, and commits them, then pushes to the origin. In the process, it also pulls from origin. This keeps your code up to date and fresh, just watch out for Git merge conflicts!


Okay, you've updated your repository and made your changes. Now you could delete the specific project you're working on but then you might commit the deletions and it'd become a headache to restore. Well, I have good news. Foxtrot will safely remove the project from your computer without committing deletions. Just type the following command:
```
foxtrot -d work/ease-of-life/foxtrot
```
This command safely removes the project using Git magic! In other words, it removes the repository from the git pull list and Git automatically removes the folder to de-clutter.


Now you have a billion dollar idea, one that could possibly rival the greatness of Foxtrot, and you need to create a project. Foxtrot has you covered! It can easily scaffold out the repository structure to keep everything nice and organized within categories and subcategories. Just do the same as you would add:
```
foxtrot -i work/ease-of-life/amazing-project
````
This will create a few empty folders and a gitignore. Foxtrot doesn't attempt to assume what language you're going to use, and it doesn't ask, because it respects your privacy and your right to choose. After all, you might have a tool that will scaffold out the rest of your project, outside of just your repository tidiness.


Last but not least, you want to create some documentation for your project. Foxtrot handles documentation by downloading it when you add a project and creating empty docs when you create one, and you can view those docs pretty easily. (Psst, they are in the docs folder at the root of your repository!)
If you want to use Foxtrot to view them, just type the following command:
```
foxtrot -m work/ease-of-life/foxtrot
```
And that command will bring you to this guide. Oh, the wonders of life!

