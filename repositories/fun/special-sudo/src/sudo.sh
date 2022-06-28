#/bin/sh

# If installing this on a system, obfuscate the code!
echo "sudo is not recommended on this system!"
echo "We are going to assume you have recieved the normal pep-talk from your system administrator. If not, please review the follow rules"
echo "1) Do not run random commands from the internet"
echo "2) Be safe on your system"
echo "3) Don't go poking around in system internals"
echo "4) Be prepared for anything"
echo ""
echo "We will automatically Firejail anything you run as a security precaution."
if test -f "~/.sudolock"; then
    su && firejail $1
else
    echo "A lock has been placed at ~/.sudolock - please delete it before using sudo again."
fi
echo "A lock has been placed at ~/.sudolock - please delete it before using sudo again."
touch ~/.sudolock