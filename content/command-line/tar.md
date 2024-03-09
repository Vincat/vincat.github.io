+++
title = 'Tar'
date = 2024-03-03T09:09:41+10:00
categories = ["command line", "content",]
tags = ["tutorial", "cli"]
draft = true
weight = 210
+++

There are many option to using this powerful archiving command, but this is all about keeping it simple. Only the most common usage examples will be demonstrated.  

## Creating a tar archive  
Bellow are 2 examples of zipping up an directory, and another of a bunch of files.  

```bash
tar cvzf nginxRTD.tar.gz ./nginx
tar cvzf archive.tar.gz *.jpg
```
+ c create
+ v show output to screen
+ z compress using gzip
+ f filename or archive name

## Extracting a tar archive  
The will extract the archive in the current working directory  

```bash
tar xvzf nginxRTD.tar.gz
``` 
+ x extract



