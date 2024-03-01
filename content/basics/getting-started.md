+++
title = 'Getting Started'
date = 2024-02-23T14:44:51+10:00
categories = ["Hugo", "content"]
tags = ["tutorial", "hugo"]
draft = false
weight = 100
+++

## Intro  

To get started, you need to install Hugo, then pick a theme, then add content.  

## Relearn  
This is the theme I have picked.  
The below 2 commands , Creates a top level entry in the menu, while the second one created a sub menu item of that previous entry.  

```bash
hugo new --kind chapter homelab/_index.md
hugo new homelab/first-content.md
```

## Front matter  

I have edited the /archtype/default.md file to look like below.

```toml
+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
categories = ["taxonomy", "content"]
tags = ["tutorial", "tag2"]
draft = true
weight = x
+++
```
