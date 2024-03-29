+++
title = 'Ubuntu Server'
date = 2024-03-03T21:51:41+10:00
categories = ["Server", "Setup"]
tags = ["tutorial", "server"]
draft = false
weight = 310
+++

## Basics  
These are my basic set up to get the environment working the way I want.  
**NOTE:** These servers are never exposed to the Internet directly.  

## Tested on Ubuntu server 22.04 LTS  

When it comes to servers, always run the LTS versions, unless you like doing constant rebuilds.  

Install by whatever method you choose, there are plenty of install guides around, during the install make sure to enable sshd, as everything here is done remotely.  


## Change Password  
I do the initial set up with a simple password, mainly because I have no wifi, so during the install there is no Internet available. After the initial install is done, then I move the server to the server closet and connect a wired Ethernet cable to provide Internet connectivity. 

```bash
passwd shadow
Changing password for shadow
Current password: 
New password: 
Retype new password: 
passwd: password updated successfully

```
## Check and set hostname, Time and date  
Since this is a server, chances are that looking at logs etc it will be important to make sure the times are correct.  

```bash
hostnamectl
timedatectl 
timedatectl list-timezones | grep Australia
sudo timedatectl set-timezone Australia/*************
timedatectl 
               Local time: Fri 2023-11-17 14:46:55 AEST
           Universal time: Fri 2023-11-17 04:46:55 UTC
                 RTC time: Fri 2023-11-17 04:46:55
                Time zone: Australia/***************
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```

## SSH Keys  

Below is a list of commands to use a different ssh key for each server. Alternatively you could just use one ssh key for all servers.  
**IMPORTANT**  Give each key a unique name, or every time you generate a new key the old one will get overwritten.  

```bash
ssh-keygen -t ed25519 -C "Dell-Laptop"          // Generate key
Enter file in which to save the key (/home/shadow/.ssh/id_ed25519): /home/shadow/.ssh/galadriel        // Give unique name to key
Enter passphrase (empty for no passphrase):

ssh-copy-id -i ~/.ssh/galadriel.pub galadriel               // Copy key to server
```

## Sudo  
I don't like having to type long complicated passwords all the time, so I make the following changes.  
Always use `visudo` to edit file. Add the following line to the end of the file. Change `user_name` for your actual user name.  
 
```bash
sudo visudo
user_name ALL=(ALL) NOPASSWD:ALL  # NO passwd
```


