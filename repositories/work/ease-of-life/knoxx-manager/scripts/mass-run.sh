source knoxx-config.sh

echo Type your command...
read COMMAND

for i in $SERVERS; do
ssh $USERNAME@$i $COMMAND
done