+++
title = 'Docker'
date = 2024-03-10T20:16:00+10:00
categories = ["Docker", "Server"]
tags = ["tutorial", "docker"]
draft = false
weight = 320
+++

## What is Docker and why use it?  
Docker is a popular platform for developing, distributing and running applications. It works by using containerization, a lightweight form of virtualization.  
Think of a container like a shipping container for software: it can be moved from computer to computer with all it's contents secure. A container includes everything an application needs to run - all its libraries, system tools, code, and runtime. This means that you can be assured the application will run an computer regardless of any operating system.   
For end users this all means less system resources used compared to traditional virtual machines, quicker start times, and the ability to run more applications. It has become the de facto standard in the tech industry for deploying applications in a reliable way.  
### Differences between an Image and a Container  
This takes a little bit of thinking to get your head around these 2 key concepts. 


**Docker Image:**  This is what you download (pull) from the internet.  
* The application code
* Runtime environment
* Libraries
* Dependancies

**Docker Container:** This is what you build on your computer. 
* The image
* Enviroment vairables (defined in docker-compose, or by command line options)
* Volume mounts
* Network settings
* Any other runtime configurations.  
  

## Installing Docker  
There is a hundred different ways to install Docker. Going with the latest packages from the people who make them is best. Follow the instructions from [here](https://docs.docker.com/engine/install/) for your system.  
On a server environment you install Docker Server. Below is a list of the commands used on a new install of Ubuntu Server 22.04 LTS.  

```bash
# Add Docker's official GPG key:
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo   "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
"$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update the system and install Docker
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Adding the user to the Docker group
sudo cat /etc/group   # MAKE SURE THE DOCKER GROUP EXISTS
sudo usermod -aG docker shadow

# Quick test to see if it works
docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
719385e32844: Pull complete 
Digest: sha256:c79d06dfdfd3d3eb04cafd0dc2bacab0992ebc243e083cabe208bac4dd7759e0
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

--------------------------------------

```
{{% notice tip %}}
So you don't have to use sudo with every docker command, add yourself to the docker group  

```bash
sudo usermod -aG docker $USER
```
{{% /notice %}}

## Folder layout  
On this computer I have 3 docker containers, each in their own directory, ntfy,traefik and whoAmi, all within my docker directory. This is where each container has their own directory for their persistant data and configurations.  

```bash
docker
├── ntfy
│   ├── cache
│   ├── docker-compose.yml
│   ├── etc
│   └── server.yml
├── traefik
│   ├── acme.json
│   ├── config
│   ├── crowdsec-config
│   ├── crowdsec-db
│   ├── docker-compose.yml
│   ├── logs
│   ├── middleware.yaml
│   └── middleware.yml
└── whoAmi
    └── docker-compose.yml

```

## Creating a container 
Once you have the docker-compose.yml file set up the way you want it, these commands are the basics of getting it going. Run them one at a time, what you are looking for are errors, either shown on the screen or in the logs. If `docker ps` does not show the container, then it has probably crashed, you will have to start trouble shooting.  
If making any changes to the docker-compose.yml file then you must use the `docker compose` commands, otherwise the changes wont be enabled.


**NOTE:** I am using whoami as a demonstration. Substitute your container name as needed.

| Command                | Explanation                                                                |
| ------                 | --------                                                                   |
| `docker compose up`    | Build and run container, good for debuging, errors will be shown on screen |
| `docker compose up -d` | Build and run container, return to terminal prompt                         |
| `docker compose down`  | Destroy container  (Permenant data not affected)                           |
| `docker stop whoami`   | Stop container named whoami                                                |
| `docker start whoami`  | Start container                                                            |

{{% notice note %}}
Stop the container with `docker compose down` first, **before** editing docker-compose.yml file.  
{{% /notice %}}


## Networking  

If you need 2 or more containers working together, then you must ensure they are on the same docker network. Below are the commands for creating a network named *gate* and once the containers are started use `docker network inspect gate` to see if your containers are there.  

```bash
docker network create gate
docker network ls
docker network inspect gate
```

{{% notice tip %}}  
If you are getting *bad Gateway* or *host not found* then check the networking is correctly set.
{{% /notice %}}  

## List images  
This will list all docker images on the computer. Weather they are running or not.  

```bash
docker images
```

## Removing orphaned unused containers/images  


{{% notice warning %}}
One command to do everything in one hit. **Remember** if it is **NOT** running it will be gone.  

```bash
docker system prune -a
```
{{% /notice %}}

The above command will delete -  
- All stopped containers
- All networks not used by at least one container
- All dangling images (i.e., images not associated with a container)
- All build cache
- All images not used by at least one container


## Individual containers/images  

```bash
docker image prune
docker ps -a
docker container prune
docker images
docker image prune
docker image rm hello-world     # use name or ID
```


## List of commands

| Command                                          | Explanation                                             |
| -----                                            | ----------                                              |
| `docker container ls -a`                         | Lists all containers on system including stopped ones   |
| `docker stop $(docker ps -a)`                    | Stop all running container                              |
| `docker image prune -a`                          | Removes all unused images                               |
| `docker container prune`                         | Removes all stopped containers                          |
| `docker run --interactive --tty alpine`          | Pull and run container, and start the interactive shell |
| `docker ps --format '{{.Names}} - {{.Status}}' ` | Lists container names and status                        |
