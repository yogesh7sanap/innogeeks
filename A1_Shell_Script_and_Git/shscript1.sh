#!/bin/bash
cd /var/log

tail gpu-manager.log &> /dev/null

if [ $? -eq 0 ]
then
echo "log data exists"
else
echo "log data does not exists"
fi

for i in 1 2 3 4 5
do
	echo "$i"

	if [ $i -eq 1 ]
	then
	echo "right now 1 is printed"
	fi
done

