var relearn_search_index = [
  {
    "breadcrumb": "My Linux Documentation",
    "content": "Hugo This will be my notes on getting Hugo up and running on Ubuntu, and then publishing on Github pages.\nBelow is a series of commands to install Hugo and then create your first site.\nThen cd into directory, pick a theme from Hugo Themes, following the themes directions for installation.\nsudo snap install hugo hugo version hugo new site Hugo1 cd ./Hugo1 git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke echo \"theme = 'ananke'\" \u003e\u003e hugo.toml",
    "description": "",
    "tags": null,
    "title": "Hugo Basics",
    "uri": "/basics/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Hugo Basics",
    "content": "Intro To get started, you need to install Hugo, pick a theme, add content.\nOne thing to note about Hugo, it that depending on the theme chosen, set up and usage can vary.\nBuilt with by Relearn and Hugo\nEmoji To enable emoji support in this theme add this to your hugo.tmol file.\nHello! 👋\nenableEmoji = trueRelearn The theme this site is based on is Relearn.\nThe below 2 commands , Creates a top level entry in the menu, while the second one created a sub menu item of that previous entry.\nhugo new --kind chapter homelab/_index.md hugo new homelab/docker.mdFront matter I have edited the /archtype/default.md file to look like below. When ever a new page is created with the command above, then the first part of the markdown file will have this content in it. NOTE: Make sure to put a numerical value for the weight otherwise you will get a build error.\n+++ title = '{{ replace .File.ContentBaseName \"-\" \" \" | title }}' date = {{ .Date }} categories = [\"taxonomy\", \"content\"] tags = [\"tutorial\", \"tag2\"] draft = true weight = x +++",
    "description": "",
    "tags": [
      "tutorial",
      "hugo"
    ],
    "title": "Getting Started",
    "uri": "/basics/getting-started/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Hugo Basics",
    "content": "New post / Chapter The first command is to make a new top heading(chapter) in the menu on the left, the second is for content under the top heading.\nThe name of the document is the title i.e first-content will change into first content when the page is generated.\nhugo new --kind chapter homelab/_index.md hugo new homelab/first-content.mdWriting This theme uses github markdown, as well as Font-Awesome and emoji’s.\nFont Awesome To use font awesome, you need the below snippet in your hugo.tml file\n[markup.goldmark.renderer] unsafe = trueThen in your pages use\nBuilt with \u003ci class=\"fas fa-heart\"\u003e\u003c/i\u003e by Relearn and HugoReference\nEmoji In hugo.toml add\nenableEmoji = trueThen add the relevant code in markdown\nHello! :wave:List of emoji codes\n",
    "description": "",
    "tags": [
      "tutorial",
      "hugo"
    ],
    "title": "Content",
    "uri": "/basics/content/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation",
    "content": " This section will contain my notes and configuration files on my home lab.\nEnvironment As you can see from the picture, we are not talking about some powerful, power hungry set up.\nFor the home user with modest requirements, i.e less than 4 users, then not much more than what is displayed in the image is all you will need.\nI have 3 HPEliteDesktop, and a bunch of Raspberry PI’s, not all running at the same time. Due to my experimental nature, there are about 3 running constantly, the others are for experimentation purposes and come and go as needed.\nThe cost of the HP EliteDesktop are at this time of writing (late 2023) is about $140 AU off Ebay. The Raspberry Pi’s I buy new, I have a few Pi3, 4 and one 5.\nAs for power consumption, It is less than 10W, so should not make much difference to you power bill.\nInternet connection I have a cable connection, with a relatively stable IP address, however if power is interrupted to the modem, then when it restarts I may end up with another IP address. The usual ports are blocked, so no running services from my IP, and I am behind a CGNAT network.\nWhat OS am I using? For servers it is predominantly Ubuntu Server 22.04 LTS, on some Raspberry pi devices it is Raspbian.\nWhat services do I run? Nextcloud PiHole with Pivpn Home Assistant lxd(Incus) Docker Traefik Mealie Paperless-ngx Nginx Freshrss Linkding Photoprism ",
    "description": "",
    "tags": null,
    "title": "Homelab",
    "uri": "/homelab/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation",
    "content": "This chapter will be my notes on using the command line on Linux, specifically Ubuntu.\nMost of the content here should work in any Linux distribution.\n",
    "description": "",
    "tags": null,
    "title": "Command Line",
    "uri": "/command-line/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Homelab",
    "content": "Basics These are my basic set up to get the environment working the way I want.\nNOTE: These servers are never exposed to the Internet directly.\nTested on Ubuntu server 22.04 LTS When it comes to servers, always run the LTS versions, unless you like doing constant rebuilds.\nInstall by whatever method you choose, there are plenty of install guides around, during the install make sure to enable sshd, as everything here is done remotely.\nChange Password I do the initial set up with a simple password, mainly because I have no wifi, so during the install there is no Internet available. After the initial install is done, then I move the server to the server closet and connect a wired Ethernet cable to provide Internet connectivity.\npasswd shadow Changing password for shadow Current password: New password: Retype new password: passwd: password updated successfullyCheck and set hostname, Time and date Since this is a server, chances are that looking at logs etc it will be important to make sure the times are correct.\nhostnamectl timedatectl timedatectl list-timezones | grep Australia sudo timedatectl set-timezone Australia/************* timedatectl Local time: Fri 2023-11-17 14:46:55 AEST Universal time: Fri 2023-11-17 04:46:55 UTC RTC time: Fri 2023-11-17 04:46:55 Time zone: Australia/*************** System clock synchronized: yes NTP service: active RTC in local TZ: noSSH Keys Below is a list of commands to use a different ssh key for each server. Alternatively you could just use one ssh key for all servers.\nIMPORTANT Give each key a unique name, or every time you generate a new key the old one will get overwritten.\nssh-keygen -t ed25519 -C \"Dell-Laptop\" // Generate key Enter file in which to save the key (/home/shadow/.ssh/id_ed25519): /home/shadow/.ssh/galadriel // Give unique name to key Enter passphrase (empty for no passphrase): ssh-copy-id -i ~/.ssh/galadriel.pub galadriel // Copy key to serverSudo I don’t like having to type long complicated passwords all the time, so I make the following changes.\nAlways use visudo to edit file. Add the following line to the end of the file. Change user_name for your actual user name.\nsudo visudo user_name ALL=(ALL) NOPASSWD:ALL # NO passwd",
    "description": "",
    "tags": [
      "tutorial",
      "server"
    ],
    "title": "Ubuntu Server",
    "uri": "/homelab/ubuntu-server/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Homelab",
    "content": "What is Docker and why use it? Docker is a popular platform for developing, distributing and running applications. It works by using containerization, a lightweight form of virtualization.\nThink of a container like a shipping container for software: it can be moved from computer to computer with all it’s contents secure. A container includes everything an application needs to run - all its libraries, system tools, code, and runtime. This means that you can be assured the application will run an computer regardless of any operating system.\nFor end users this all means less system resources used compared to traditional virtual machines, quicker start times, and the ability to run more applications. It has become the de facto standard in the tech industry for deploying applications in a reliable way.\nDifferences between an Image and a Container This takes a little bit of thinking to get your head around these 2 key concepts.\nDocker Image: This is what you download (pull) from the internet.\nThe application code Runtime environment Libraries Dependancies Docker Container: This is what you build on your computer.\nThe image Enviroment vairables (defined in docker-compose, or by command line options) Volume mounts Network settings Any other runtime configurations. Installing Docker There is a hundred different ways to install Docker. Going with the latest packages from the people who make them is best. Follow the instructions from here for your system.\nOn a server environment you install Docker Server. Below is a list of the commands used on a new install of Ubuntu Server 22.04 LTS.\n# Add Docker's official GPG key: sudo apt-get install ca-certificates curl gnupg sudo install -m 0755 -d /etc/apt/keyrings curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg sudo chmod a+r /etc/apt/keyrings/docker.gpg # Add the repository to Apt sources: echo \"deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\ \"$(. /etc/os-release \u0026\u0026 echo \"$VERSION_CODENAME\")\" stable\" | sudo tee /etc/apt/sources.list.d/docker.list \u003e /dev/null # Update the system and install Docker sudo apt-get update sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin # Adding the user to the Docker group sudo cat /etc/group # MAKE SURE THE DOCKER GROUP EXISTS sudo usermod -aG docker shadow # Quick test to see if it works docker run hello-world Unable to find image 'hello-world:latest' locally latest: Pulling from library/hello-world 719385e32844: Pull complete Digest: sha256:c79d06dfdfd3d3eb04cafd0dc2bacab0992ebc243e083cabe208bac4dd7759e0 Status: Downloaded newer image for hello-world:latest Hello from Docker! This message shows that your installation appears to be working correctly. -------------------------------------- Tip So you don’t have to use sudo with every docker command, add yourself to the docker group\nsudo usermod -aG docker $USER Folder layout On this computer I have 3 docker containers, each in their own directory, ntfy,traefik and whoAmi, all within my docker directory. This is where each container has their own directory for their persistant data and configurations.\ndocker ├── ntfy │ ├── cache │ ├── docker-compose.yml │ ├── etc │ └── server.yml ├── traefik │ ├── acme.json │ ├── config │ ├── crowdsec-config │ ├── crowdsec-db │ ├── docker-compose.yml │ ├── logs │ ├── middleware.yaml │ └── middleware.yml └── whoAmi └── docker-compose.ymlCreating a container Once you have the docker-compose.yml file set up the way you want it, these commands are the basics of getting it going. Run them one at a time, what you are looking for are errors, either shown on the screen or in the logs. If docker ps does not show the container, then it has probably crashed, you will have to start trouble shooting.\nIf making any changes to the docker-compose.yml file then you must use the docker compose commands, otherwise the changes wont be enabled.\nNOTE: I am using whoami as a demonstration. Substitute your container name as needed.\nCommand Explanation docker compose up Build and run container, good for debuging, errors will be shown on screen docker compose up -d Build and run container, return to terminal prompt docker compose down Destroy container (Permenant data not affected) docker stop whoami Stop container named whoami docker start whoami Start container Note Stop the container with docker compose down first, before editing docker-compose.yml file.\nNetworking If you need 2 or more containers working together, then you must ensure they are on the same docker network. Below are the commands for creating a network named gate and once the containers are started use docker network inspect gate to see if your containers are there.\ndocker network create gate docker network ls docker network inspect gate Tip If you are getting bad Gateway or host not found then check the networking is correctly set.\nList images This will list all docker images on the computer. Weather they are running or not.\ndocker imagesRemoving orphaned unused containers/images Warning One command to do everything in one hit. Remember if it is NOT running it will be gone.\ndocker system prune -a The above command will delete -\nAll stopped containers All networks not used by at least one container All dangling images (i.e., images not associated with a container) All build cache All images not used by at least one container Individual containers/images docker image prune docker ps -a docker container prune docker images docker image prune docker image rm hello-world # use name or IDList of commands Command Explanation docker container ls -a Lists all containers on system including stopped ones docker stop $(docker ps -a) Stop all running container docker image prune -a Removes all unused images docker container prune Removes all stopped containers docker run --interactive --tty alpine Pull and run container, and start the interactive shell docker ps --format '{{.Names}} - {{.Status}}' Lists container names and status ",
    "description": "",
    "tags": [
      "tutorial",
      "docker"
    ],
    "title": "Docker",
    "uri": "/homelab/docker/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Homelab",
    "content": "Created on: Fri 12 Jan 2024\nUpdated on: Sat 9 Mar 2024\nOS used: Ubuntu Server 22.04, Raspian (Bookworm)\nUser Name: shadow\nFeatures Lightweight Default to private network like Docker Security Snapshots Storage management to name a few.\nGetting started LXD is already installed on the default Ubuntu server, but in case it isn’t, you can install it. Either way make sure to add a your username to the lxd group.\nsudo apt-get install lxd # Incase LXD is not installed sudo usermod -aG lxd shadow groups lxd adm dialout cdrom sudo audio video plugdev games users input render netdev gpio i2c spi shadowInitializing the LXD server Before you can use the LXD server, it first needs to be initialized.\nBelow is all the questions you get asked, just go with the defaults unless you know differently.\nsudo lxd init Would you like to use LXD clustering? (yes/no) [default=no]: Do you want to configure a new storage pool? (yes/no) [default=yes]: Name of the new storage pool [default=default]: Would you like to connect to a MAAS server? (yes/no) [default=no]: Would you like to create a new local network bridge? (yes/no) [default=yes]: What should the new bridge be called? [default=lxdbr0]: What IPv4 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: auto What IPv6 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]: auto Would you like the LXD server to be available over the network? (yes/no) [default=no]: yes Address to bind LXD to (not including port) [default=all]: Port to bind LXD to [default=8443]: Trust password for new clients: Again: Would you like stale cached images to be updated automatically? (yes/no) [default=yes]: Would you like a YAML \"lxd init\" preseed to be printed? (yes/no) [default=no]: noUsing LXD At this stage you can use LXD, but the container will only be available on the host itself. If you want to be able to access the container on your local LAN, i.e ssh into it then follow the networking below. Below we set up Bridged networking where the container or VM will get its own IP address over the LAN.\nNetworking We need to make this accessible to the LAN. Below is an example config file.\nNOTE: Ubuntu uses netplan for networking, while Raspbian, which is based on Debian 12 does not.\nNetplan (Ubuntu) We are creating bridge0 and connecting to eno1 which is the physical interface.\nsudo vim /etc/netplan/00-installer-config.yaml # This is the network config written by 'subiquity' network: ethernets: eno1: dhcp4: true version: 2 bridges: bridge0: interfaces: [eno1] addresses: [192.168.0.248/24] routes: - to: default via: 192.168.0.1 nameservers: addresses: - 192.168.0.143 parameters: stp: true forward-delay: 4Raspberry pi5 networking Raspbian at this time of writing does not use netplan, so below are some different steps to achieve the same thing.\nWe are creating br0 to connect to eth0 which is the physical interface.\nsudo apt install bridge-utils net-tools sudo vim /etc/netowrk/interfaces.d/br0-setup # Define the physical interface as manual auto eth0 iface eth0 inet manual # Define the bridge interface auto br0 iface br0 inet dhcp bridge_ports eth0 bridge_stp off bridge_fd 0 bridge_maxwait 0 sudo systemctl restart networkingChecking the configuration works. Interface br0 should be like below, with the ip address from your DHCP server.\nifconfig br0: flags=4163\u003cUP,BROADCAST,RUNNING,MULTICAST\u003e mtu 1500 inet 192.168.0.102 netmask 255.255.255.0 broadcast 192.168.0.255 inet6 fe80::da3a:ddff:fee8:7943 prefixlen 64 scopeid 0x20\u003clink\u003e ether d8:3a:dd:e8:79:43 txqueuelen 1000 (Ethernet) RX packets 173 bytes 50609 (49.4 KiB) RX errors 0 dropped 0 overruns 0 frame 0 TX packets 123 bytes 18453 (18.0 KiB) TX errors 0 dropped 0 overruns 0 carrier 0 collisions 0 eth0: flags=4163\u003cUP,BROADCAST,RUNNING,MULTICAST\u003e mtu 1500 ether d8:3a:dd:e8:79:43 txqueuelen 1000 (Ethernet) RX packets 177 bytes 50889 (49.6 KiB) RX errors 0 dropped 1 overruns 0 frame 0 TX packets 125 bytes 18893 (18.4 KiB) TX errors 0 dropped 0 overruns 0 carrier 0 collisions 0 device interrupt 113 sudo rebootNetwork profile This is needed to get the networking working correctly.\nlxc profile create mainlan Profile mainlan created lxc profile device add mainlan eth0 nic nictype=bridged parent=br0 Device eth0 added to mainlan lxc profile list +---------+---------------------+---------+ | NAME | DESCRIPTION | USED BY | +---------+---------------------+---------+ | default | Default LXD profile | 1 | +---------+---------------------+---------+ | mainlan | | 0 | +---------+---------------------+---------+Working with LXD At this stage we are ready to find a container/VM and download it, then use it.\nGet list of available containers/VM Filter the list with grep Download and start the container using the default profile using autostart Download and start the VM using the default profile using autostart Log into container 1 lxc list 2 lxc image list images: | grep alpine 3 lxc launch images:alpine/3.19 test3 --profile default --profile bridgeprofile -c boot.autostart=true 4 lxc launch images:debian/12 debian12-VM --vm --profile default --profile bridgeprofile -c boot.autostart=true 5 lxc exec test3 bash Note NOTE: If you don’t specify --vm in the lxc launch images command, lxd will default to containers.\nlxc list +-------+---------+----------------------+-----------------------------------------------+-----------+-----------+ | NAME | STATE | IPV4 | IPV6 | TYPE | SNAPSHOTS | +-------+---------+----------------------+-----------------------------------------------+-----------+-----------+ | test | RUNNING | 10.234.75.161 (eth0) | fd42:f53d:e5e8:c43d:216:3eff:fee8:339f (eth0) | CONTAINER | 0 | +-------+---------+----------------------+-----------------------------------------------+-----------+-----------+ | test2 | RUNNING | 192.168.0.220 (eth0) | fd63:12d5:1a34:9db4:216:3eff:fec3:7806 (eth0) | CONTAINER | 0 | +-------+---------+----------------------+-----------------------------------------------+-----------+-----------+ lxc profile list +---------------+---------------------+---------+ | NAME | DESCRIPTION | USED BY | +---------------+---------------------+---------+ | bridgeprofile | | 1 | +---------------+---------------------+---------+ | default | Default LXD profile | 2 | +---------------+---------------------+---------+LXD Commands lxc info test3 lxc config show test3 lxc config edit test3 lxc exec test2 bash lxc stop test lxc delete testConfig parameters lxc config set test3 security.nesting=true \\\\ Allows docker to operateTransfer files into/out of LXD container This pushes the file serverSetup1.sh to LXc container named ubuntu23 to the / directory. The second command pulls the file from the LXD container to the host.\nThis is done from the host itself.\nlxc file push serverSetup1.sh ubuntu23/ lxc file pull ubuntu23/serverSetup1.sh .Snapshots Below are some examples of making and listing snapshots, also restore and delete command.\nlxc snapshot ubuntu23 ubuntu23-snapshot1 shadow@galadriel:~$ lxc list +-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+ | NAME | STATE | IPV4 | IPV6 | TYPE | SNAPSHOTS | +-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+ | debian12-VM | RUNNING | 192.168.0.109 (enp5s0) | fd63:12d5:1a34:9db4:216:3eff:fe30:ab6 (enp5s0) | VIRTUAL-MACHINE | 0 | +-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+ | fedora39 | RUNNING | 192.168.0.173 (eth0) | fd63:12d5:1a34:9db4:216:3eff:fee4:161a (eth0) | CONTAINER | 0 | +-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+ | ubuntu23 | RUNNING | 192.168.0.114 (eth0) | fd63:12d5:1a34:9db4:216:3eff:febf:9276 (eth0) | CONTAINER | 1 | +-------------+---------+------------------------+------------------------------------------------+-----------------+-----------+ shadow@galadriel:~$ lxc info ubuntu23 Name: ubuntu23 Status: RUNNING Type: container Architecture: x86_64 PID: 543341 Created: 2024/03/01 20:14 AEST Last Used: 2024/03/01 20:48 AEST Resources: Processes: 13 Disk usage: root: 191.68MiB CPU usage: CPU usage (in seconds): 256 Memory usage: Memory (current): 147.22MiB Swap (current): 12.00KiB Network usage: eth0: Type: broadcast State: UP Host interface: veth40da65b7 MAC address: 00:16:3e:bf:92:76 MTU: 1500 Bytes received: 196.89MB Bytes sent: 4.38MB Packets received: 1132696 Packets sent: 17737 IP addresses: inet: 192.168.0.114/24 (global) inet6: fd63:12d5:1a34:9db4:216:3eff:febf:9276/64 (global) inet6: fe80::216:3eff:febf:9276/64 (link) lo: Type: loopback State: UP MTU: 65536 Bytes received: 11.73kB Bytes sent: 11.73kB Packets received: 102 Packets sent: 102 IP addresses: inet: 127.0.0.1/8 (local) inet6: ::1/128 (local) Snapshots: +--------------------+-----------------------+------------+----------+ | NAME | TAKEN AT | EXPIRES AT | STATEFUL | +--------------------+-----------------------+------------+----------+ | ubuntu23-snapshot1 | 2024/03/09 22:07 AEST | | NO | +--------------------+-----------------------+------------+----------+ lxc restore ubuntu23 ubuntu23-snapshot1 lxc delete ubuntu23/ubuntu23-snapshot1User and ssh container setup If you want to use this container over ssh, then I have found that you have to use the following commands to set thing up.\nFirst need to log into container/VM, then add a user, adding them to the sudo group, then make sure the ssh-server is installed and running.\nNote You may get a server certificate error trying to login, if that is the case remove sshd-server and reinstall like below.\nlxc exec test3 bash adduser shadow usermod -aG sudo shadow # In case of ssh errors apt remove --purge openssh-server rm -r /etc/ssh/sshd_config.d/ apt install openssh-server systemctl status sshd",
    "description": "",
    "tags": [
      "tutorial",
      "vm"
    ],
    "title": "Lxd",
    "uri": "/homelab/lxd/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation",
    "content": " I love technology.\nBut, sometimes technology does not love me!\nThis site will be my public notes about Linux/Homelab experiences.\nHopefully you find it helpfull.\nContact Please consider leaving feedback, suggestions etc …\nvincent@vincat.blog\n",
    "description": "",
    "tags": null,
    "title": "About",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: LXD",
    "uri": "/categories/lxd/index.html"
  },
  {
    "breadcrumb": "",
    "content": "This site will be my public notes and examples of config files for running a Homelab, also on Linux commands.\nWhile everything here will be based around Ubuntu, Server and Desktop, most commands will be relevant to other Debian based Linux’s.\nIn the mix is my Raspberry Pi’s, which my be running Raspbian, based on Debian.\nPlease use the menu on the left to have a look around.\nFri 29 Mar 2024 This week I have added/updated 2 pages, Docker and LXD. I consider these 2 technologies as being at the center of any Homelab.\n",
    "description": "",
    "tags": null,
    "title": "My Linux Documentation",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Tutorial",
    "uri": "/tags/tutorial/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Virtulization",
    "uri": "/categories/virtulization/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Vm",
    "uri": "/tags/vm/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Docker",
    "uri": "/tags/docker/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Docker",
    "uri": "/categories/docker/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Server",
    "uri": "/categories/server/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Server",
    "uri": "/tags/server/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Setup",
    "uri": "/categories/setup/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Content",
    "uri": "/categories/content/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Hugo",
    "uri": "/tags/hugo/index.html"
  },
  {
    "breadcrumb": "My Linux Documentation \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Hugo",
    "uri": "/categories/hugo/index.html"
  }
]
