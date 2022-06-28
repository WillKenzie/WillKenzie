source knoxx-config.sh

for i in $SERVERS; do
ssh -t $USERNAME@$i "sudo apt update & sudo apt upgrade"
done