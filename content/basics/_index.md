+++
archetype = "chapter"
title = "Hugo Basics"
weight = 1
+++

## Hugo  
This will be my notes on getting Hugo up and running on Ubuntu, and then publishing on Github pages.  
Below is a series of commands to install Hugo and then create your first site.  
Then cd into directory, pick a theme from [Hugo Themes](https://themes.gohugo.io/), following the themes directions for installation.

```bash
sudo snap install hugo
hugo version
hugo new site Hugo1
cd ./Hugo1
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo "theme = 'ananke'" >> hugo.toml
```


