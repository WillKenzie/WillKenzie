source knoxx-config.sh

echo Type the directory to copy...
read FILE

for i in $SERVERS; do
ssh $USERNAME@$i "rm -r ~/$FILE"
tar -cfv $FILE.tar $FILE & cat $FILE.tar | ssh $USERNAME@$i "cat >> ~/ & tar -xf $FILE.tar & rm $FILE.tar"
done