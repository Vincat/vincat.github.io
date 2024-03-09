+++
title = 'Content'
date = 2024-03-01T18:43:40+10:00
categories = ["Hugo", "content"]
tags = ["tutorial", "hugo"]
draft = false
weight = 150
+++

## New post / Chapter  
The first command is to make a new top heading(chapter) in the menu on the left, the second is for content under the top heading.  
The name of the document is the title i.e `first-content` will change into first content when the page is generated.  

```bash
hugo new --kind chapter homelab/_index.md
hugo new homelab/first-content.md

```

## Writing  
This theme uses github markdown, as well as Font-Awesome and emoji's.  


## Font Awesome  
To use font awesome, you need the below snippet in your `hugo.tml` file  

```toml
[markup.goldmark.renderer]
    unsafe = true
```

Then in your pages use  

```
Built with <i class="fas fa-heart"></i> by Relearn and Hugo
```

[Reference](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/icon/)   

## Emoji  

In `hugo.toml` add  

```toml
enableEmoji = true

```

Then add the relevant code in markdown

```md
Hello! :wave:

```
[List of emoji codes](https://gohugo.io/quick-reference/emojis/)  


