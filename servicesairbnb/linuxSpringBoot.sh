#!/bin/bash

# to send a file from pc local to instance 
# scp -i password.pem file.ext user@ip_public:/home/user

#you have to be root user with 
#sudo su 

echo -e "-------------------\n Updating instance  \n-------------------"
sleep 5



#update instance 

yum update -y

#install java 11


echo -e "-------------------\n Installing Java  \n-------------------"
sleep 5


yum install java-11-openjdk-devel -y       

java -version # check version 

echo -e "-------------------\n Starting Sptingboot  \n-------------------"
sleep 5

java -jar serviceAirbnb.jar # start app