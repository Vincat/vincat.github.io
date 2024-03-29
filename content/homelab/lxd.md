+++
title = 'Lxd'
date = 2024-03-27T09:25:45+10:00
categories = ["LXD", "Virtulization"]
tags = ["tutorial", "vm"]
draft = false
weight = 330
+++

*Created on: Fri 12 Jan 2024  
Updated on: Sat 9 Mar 2024  
OS used: Ubuntu Server 22.04, Raspian (Bookworm)  
User Name: shadow*  

## Features  
- Lightweight
- Default to private network like Docker
- Security
- Snapshots
- Storage management  

to name a few.  

## Getting started  
LXD is already installed on the default Ubuntu server, but in case it isn't, you can install it. Either way make sure to add a your username to the *lxd* group.  

```bash
sudo apt-get install lxd  # Incase LXD is not installed
sudo usermod -aG lxd shadow
groups
lxd adm dialout cdrom sudo audio video plugdev games users input render netdev gpio i2c spi shadow
```

## Initializing the LXD server 
Before you can use the LXD server, it first needs to be initialized.  
Below is all the questions you get asked, just go with the defaults unless you know differently.  

```bash
sudo lxd init
Would you like to use LXD clustering? (yes/no) [default=no]:
Do you want to configure a new storage pool? (yes/no) [default=yes]:
Name of the new storage pool [default=default]:
Would you like to connect to a MAAS server? (yes/no) [default=no]:
Would you like to create a new local network bridge? (yes/no) [default=yes]:
What should the new bridge be called? [default=lxdbr0]:
What IPv4 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: auto
What IPv6 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: auto
Would you like the LXD server to be available over the network? (yes/no) [default=no]: yes
Address to bind LXD to (not including port) [default=all]:
Port to bind LXD to [default=8443]:
Trust password for new clients:
Again:
Would you like stale cached images to be updated automatically? (yes/no) [default=yes]:
Would you like a YAML "lxd init" preseed to be printed? (yes/no) [default=no]: no
```

### Using LXD  
At this stage you can use LXD, but the container will only be available on the host itself. If you want to be able to access the container on your local LAN, i.e ssh into it then follow the networking below. Below we set up Bridged networking where the container or VM will get its own IP address over the LAN.  


## Networking  
We need to make this accessible to the LAN. Below is an example config file.  
**NOTE:** Ubuntu uses netplan for networking, while Raspbian, which is based on Debian 12 does not.  

### Netplan (Ubuntu)  
We are creating  *bridge0* and connecting to *eno1* which is the physical interface.  

```bash
sudo vim /etc/netplan/00-installer-config.yaml


# This is the network config written by 'subiquity'
network:
  ethernets:
    eno1:
      dhcp4: true
  version: 2

  bridges:
    bridge0:
      interfaces: [eno1]
      addresses: [192.168.0.248/24]
      routes:
        - to: default
          via: 192.168.0.1
      nameservers:
        addresses:
          - 192.168.0.143
      parameters:
        stp: true
        forward-delay: 4

```
### Raspberry pi5 networking  

Raspbian at this time of writing does not use netplan, so below are some different steps to achieve the same thing.  
We are creating *br0* to connect to *eth0* which is the physical interface.  

```bash
sudo apt install bridge-utils net-tools

sudo vim /etc/netowrk/interfaces.d/br0-setup
# Define the physical interface as manual
auto eth0
iface eth0 inet manual

# Define the bridge interface
auto br0
iface br0 inet dhcp
    bridge_ports eth0
    bridge_stp off
    bridge_fd 0
    bridge_maxwait 0

sudo systemctl restart networking
```

### Checking the configuration works.  
Interface br0 should be like below, with the ip address from your DHCP server.  

```bash
ifconfig
br0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.102  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::da3a:ddff:fee8:7943  prefixlen 64  scopeid 0x20<link>
        ether d8:3a:dd:e8:79:43  txqueuelen 1000  (Ethernet)
        RX packets 173  bytes 50609 (49.4 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 123  bytes 18453 (18.0 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        ether d8:3a:dd:e8:79:43  txqueuelen 1000  (Ethernet)
        RX packets 177  bytes 50889 (49.6 KiB)
        RX errors 0  dropped 1  overruns 0  frame 0
        TX packets 125  bytes 18893 (18.4 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 113

sudo reboot
```

### Network profile  
This is needed to get the networking working correctly.  

```bash
lxc profile create mainlan
Profile mainlan created
lxc profile device add mainlan eth0 nic nictype=bridged parent=br0
Device eth0 added to mainlan
lxc profile list
+---------+---------------------+---------+
|  NAME   |     DESCRIPTION     | USED BY |
+---------+---------------------+---------+
| default | Default LXD profile | 1       |
+---------+---------------------+---------+
| mainlan |                     | 0       |
+---------+---------------------+---------+
```

## Working with LXD  

At this stage we are ready to find a container/VM and download it, then use it.  
1. Get list of available containers/VM  
2. Filter the list with grep
3. Download and start the container using the default profile using autostart
4. Download and start the VM using the default profile using autostart
5. Log into container

```bash
1 lxc list
2 lxc image list images: | grep alpine
3 lxc launch images:alpine/3.19 test3 --profile default --profile bridgeprofile -c boot.autostart=true
4 lxc launch images:debian/12 debian12-VM --vm --profile default --profile bridgeprofile -c boot.autostart=true

5 lxc exec test3 bash
```

{{% notice note %}}  
**NOTE:** If you don't specify `--vm` in the *lxc launch images* command, lxd will default to containers.  
{{% /notice %}}  


```bash
lxc list
+-------+---------+----------------------+-----------------------------------------------+-----------+-----------+
| NAME  |  STATE  |         IPV4         |                     IPV6                      |   TYPE    | SNAPSHOTS |
+-------+---------+----------------------+-----------------------------------------------+-----------+-----------+
| test  | RUNNING | 10.234.75.161 (eth0) | fd42:f53d:e5e8:c43d:216:3eff:fee8:339f (eth0) | CONTAINER | 0         |
+-------+---------+----------------------+-----------------------------------------------+-----------+-----------+
| test2 | RUNNING | 192.168.0.220 (eth0) | fd63:12d5:1a34:9db4:216:3eff:fec3:7806 (eth0) | CONTAINER | 0         |
+-------+---------+----------------------+-----------------------------------------------+-----------+-----------+

lxc profile list
+---------------+---------------------+---------+
|     NAME      |     DESCRIPTION     | USED BY |
+---------------+---------------------+---------+
| bridgeprofile |                     | 1       |
+---------------+---------------------+---------+
| default       | Default LXD profile | 2       |
+---------------+---------------------+---------+

```


## LXD Commands  


```bash
lxc info test3
lxc config show test3
lxc config edit test3
lxc exec test2 bash
lxc stop test
lxc delete test
```

## Config parameters  

```bash
lxc config set test3 security.nesting=true   \\ Allows docker to operate

```

## Transfer files into/out of LXD container  
This pushes the file serverSetup1.sh to LXc container named **ubuntu23** to the / directory. The second command pulls the file from the LXD container to the host.  
This is done from the host itself.

```bash
lxc file push serverSetup1.sh ubuntu23/
lxc file pull ubuntu23/serverSetup1.sh .
```

## Snapshots  
Below are some examples of making and listing snapshots, also restore and delete command.

```bash
lxc snapshot ubuntu23 ubuntu23-snapshot1

shadow@galadriel:~$ lxc list
+-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+
|    NAME     |  STATE  |          IPV4          |                      IPV6                      |      TYPE       | SNAPSHOTS |
+-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+
| debian12-VM | RUNNING | 192.168.0.109 (enp5s0) | fd63:12d5:1a34:9db4:216:3eff:fe30:ab6 (enp5s0) | VIRTUAL-MACHINE | 0         |
+-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+
| fedora39    | RUNNING | 192.168.0.173 (eth0)   | fd63:12d5:1a34:9db4:216:3eff:fee4:161a (eth0)  | CONTAINER       | 0         |
+-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+
| ubuntu23    | RUNNING | 192.168.0.114 (eth0)   | fd63:12d5:1a34:9db4:216:3eff:febf:9276 (eth0)  | CONTAINER       | 1         |
+-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+

shadow@galadriel:~$ lxc info ubuntu23
Name: ubuntu23
Status: RUNNING
Type: container
Architecture: x86_64
PID: 543341
Created: 2024/03/01 20:14 AEST
Last Used: 2024/03/01 20:48 AEST

Resources:
  Processes: 13
  Disk usage:
    root: 191.68MiB
  CPU usage:
    CPU usage (in seconds): 256
  Memory usage:
    Memory (current): 147.22MiB
    Swap (current): 12.00KiB
  Network usage:
    eth0:
      Type: broadcast
      State: UP
      Host interface: veth40da65b7
      MAC address: 00:16:3e:bf:92:76
      MTU: 1500
      Bytes received: 196.89MB

      Bytes sent: 4.38MB
      Packets received: 1132696
      Packets sent: 17737
      IP addresses:
        inet:  192.168.0.114/24 (global)
        inet6: fd63:12d5:1a34:9db4:216:3eff:febf:9276/64 (global)
        inet6: fe80::216:3eff:febf:9276/64 (link)
    lo:
      Type: loopback
      State: UP
      MTU: 65536
      Bytes received: 11.73kB
      Bytes sent: 11.73kB
      Packets received: 102
      Packets sent: 102
      IP addresses:
        inet:  127.0.0.1/8 (local)
        inet6: ::1/128 (local)

Snapshots:
+--------------------+-----------------------+------------+----------+
|        NAME        |       TAKEN AT        | EXPIRES AT | STATEFUL |
+--------------------+-----------------------+------------+----------+
| ubuntu23-snapshot1 | 2024/03/09 22:07 AEST |            | NO       |
+--------------------+-----------------------+------------+----------+

lxc restore ubuntu23 ubuntu23-snapshot1
lxc delete ubuntu23/ubuntu23-snapshot1
```

## User and ssh container setup  
If you want to use this container over ssh, then I have found that you have to use the following commands to set thing up.  
First need to log into container/VM, then add a user, adding them to the sudo group, then make sure the ssh-server is installed and running.  


{{% notice note %}}  
You may get a server certificate error trying to login, if that is the case remove sshd-server and reinstall like below.  
{{% /notice %}}  

```bash
lxc exec test3 bash
adduser shadow
usermod -aG sudo shadow 

# In case of ssh errors
apt remove --purge openssh-server
rm -r /etc/ssh/sshd_config.d/
apt install openssh-server
systemctl status sshd
```


