source knoxx-config.sh

echo Type the packages to install...
read PACKAGES

for i in $SERVERS; do
ssh -t $USERNAME@$i "sudo apt install $PACKAGES"
done