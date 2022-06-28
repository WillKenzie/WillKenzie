source knoxx-config.sh
ssh-keygen

for i in $SERVERS; do
cat ~/.ssh/id_rsa.pub | ssh $USERNAME@$i "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
done