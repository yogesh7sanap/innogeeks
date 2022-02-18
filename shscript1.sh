#!/bin/bash
cd /var/log

tail gpu-manager.log &> /dev/null

if [ $? -eq 0 ]
then
echo "log data exists"
else
echo "log data does not exists"
fi