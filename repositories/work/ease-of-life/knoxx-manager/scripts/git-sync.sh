source knoxx-config.sh

echo Type the repo to sync...
read REPO
echo Type the repo folder name...
read TARGET

for i in $SERVERS; do
ssh -t $USERNAME@$i "sudo apt install git"
ssh $USERNAME@$i "git -C '$TARGET' pull || git clone $REPO '$TARGET'"
done