# My name is William Kenzie
I am a software engineer that focuses heavily on fullstack development.

## Languages I use
- Python
- Javascript/HTML/CSS (TailwindCSS)
- Node.js (Express + EJS)

## Awards I've won
- 1st Place at Business Professionals of America Regionals (Region 4/5) in PC Servicing and Troubleshooting
- 2nd Place at Business Professionals of America Regionals (Region 4/5) in Fundamentals of Web Design
- 3rd Place at Business Professionals of America Regionals (Region 4/5) in Python Programming
- 3rd Place at Business Professionals of America State (IN) in PC Servicing and Troubleshooting
- 7th Place at Business Professionals of America Nationals (US) in Linux System Administration

## Certifications
- Networking (Certiport)
- Network Security (Certiport)
- Device Configuration and Management (Certiport)
- Cybersecurity (Certiport)
- HTML and CSS (Certiport)
- Software Development (Certiport)
- JavaScript (Certiport)

## How to contact me
Please use the following email addresses depending on what you need to get ahold of me for:
- work@williamk.dev (For Job Opportunities/Employment)
- school@williamk.dev (For College Opportunities/College Communication)
- social@williamk.dev (For Social Interactions)

If you'd rather use PGP encryption, you can email me at me@williamk.dev and use the public key associated with that address. 

## Using this monorepository
All content in this monorepository is MIT licensed unless stated otherwise.

### Introducing Foxtrot
Foxtrot is simple to install, just run this command and it'll install itself to your local directory. I personally recommend creating a special folder for my repository and storing Foxtrot there. I do not currently support running Foxtrot globally, since it has no configuration options to work for other monorepositories at this time. It will only work with mine, so it makes little sense to install it to the global user.

Anyways, here's the magic command:
```
wget https://raw.githubusercontent.com/willkenzie/willkenzie/main/repositories/work/ease-of-life/foxtrot/src/foxtrot
chmod +x foxtrot
```

To learn more about foxtrot, run
```
foxtrot -m work/ease-of-life/foxtrot
```

### Doing it without Foxtrot
If you hate foxes, you can also do everything manually with Git. Please note I did a lot of research into Git to make Foxtrot, and the commands below are not nearly as fast as Foxtrot, which will only download specific parts. I only recommend doing things manually if you know what you are doing.

Alas, if you don't, here's some pretty basic commands:

```
git init
git remote add williamk https://github.com/willkenzie/willkenzie.git
git fetch williamk
git checkout williamk/main -- repositories/[type]/[category (optional)]/[repository_name]
```