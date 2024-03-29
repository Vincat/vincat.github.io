+++
title = 'Getting Started'
date = 2024-02-23T14:44:51+10:00
categories = ["Hugo", "content"]
tags = ["tutorial", "hugo"]
draft = false
weight = 100
+++

## Intro  

To get started, you need to install Hugo, pick a theme, add content.  
One thing to note about Hugo, it that depending on the theme chosen, set up and usage can vary.  


Built with <i class="fas fa-heart"></i> by Relearn and Hugo

## Emoji  
To enable emoji support in this theme add this to your hugo.tmol file.  

Hello! :wave:

```toml
enableEmoji = true
```

## Relearn  
The theme this site is based on is [Relearn](https://mcshelby.github.io/hugo-theme-relearn/basics/installation/index.html).  
The below 2 commands , Creates a top level entry in the menu, while the second one created a sub menu item of that previous entry.  

```bash
hugo new --kind chapter homelab/_index.md
hugo new homelab/docker.md
```

## Front matter  

I have edited the /archtype/default.md file to look like below. When ever a new page is created with the command above, then the first part of the markdown file will have this content in it. **NOTE:** Make sure to put a numerical value for the weight otherwise you will get a build error.  

```bash
+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
categories = ["taxonomy", "content"]
tags = ["tutorial", "tag2"]
draft = true
weight = x
+++
```


