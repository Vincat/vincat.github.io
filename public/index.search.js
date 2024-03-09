var relearn_search_index = [
  {
    "breadcrumb": "",
    "content": "Hugo This will be my notes on getting Hugo up and running on Ubuntu, and then publishing on Github pages.\nBelow is a series of commands to install Hugo and then create your first site.\nThen cd into directory, pick a theme from Hugo Themes, following the themes directions for installation.\nsudo snap install hugo hugo version hugo new site Hugo1 cd ./Hugo1 git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke echo \"theme = 'ananke'\" \u003e\u003e hugo.toml",
    "description": "",
    "tags": null,
    "title": "Hugo Basics",
    "uri": "/basics/index.html"
  },
  {
    "breadcrumb": "Hugo Basics",
    "content": "Intro To get started, you need to install Hugo, then pick a theme, then add content.\nBuilt with by Relearn and Hugo\nHello! 👋\nRelearn This is the theme I have picked.\nThe below 2 commands , Creates a top level entry in the menu, while the second one created a sub menu item of that previous entry.\nhugo new --kind chapter homelab/_index.md hugo new homelab/first-content.mdFront matter I have edited the /archtype/default.md file to look like below.\n+++ title = '{{ replace .File.ContentBaseName \"-\" \" \" | title }}' date = {{ .Date }} categories = [\"taxonomy\", \"content\"] tags = [\"tutorial\", \"tag2\"] draft = true weight = x +++",
    "description": "",
    "tags": [
      "tutorial",
      "hugo"
    ],
    "title": "Getting Started",
    "uri": "/basics/getting-started/index.html"
  },
  {
    "breadcrumb": "Hugo Basics",
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
    "breadcrumb": "",
    "content": "What is here? This site will contain my notes and configuration files on my home lab.\nAs you can see it is not some powerful, power hungry set up. For the home user with modest requirements, i.e less than 4 users at most, then not much more than what is displayed in the image is all you will need.\nI have 3 HPEliteDesktops, and a bunch of Raspberry PI’s, not all running at the same time. Due to my experimental nature, there are about 3 running constantly, the others are for experimentation purposes.\nThe cost of the HP EliteDesktop are at thie time of writing (late 2023) is about $140 AU off Ebay. The Raspberry Pi’s I buy new, I have a few Pi3, 4 and one 5.\nWhat services do I run? Nextcloud PiHole with Pivpn Home Assistant lxd(Incus) Docker Traefik Mealie Paperless-ngx Ngix Freshrss Linkding Photoprism What OS am I using? For servers it is predominantly Ubuntu Server 22.04 LTS, on some Raspberry pi devices it is Raspbian.\n",
    "description": "",
    "tags": null,
    "title": "Homelab",
    "uri": "/homelab/index.html"
  },
  {
    "breadcrumb": "",
    "content": "This chapter will be my notes on using the command line on Linux, specifically Ubuntu.\nMost of the content here should work in any Linux distribution.\n",
    "description": "",
    "tags": null,
    "title": "Command Line",
    "uri": "/command-line/index.html"
  },
  {
    "breadcrumb": "Homelab",
    "content": "Basics These are my basic set up to get the environment working the way I want.\nNOTE: These servers are never exposed to the Internet directly.\nTested on Ubuntu server 22.04 LTS When it comes to servers, always run the LTS versions, unless you like doing constant rebuilds.\nInstall by whatever method you choose, there are plenty of install guides around, during the install make sure to enable sshd, as everything here is done remotely.\nChange Password I do the initial set up with a simple password, mainly because I have no wifi, so during the install there is no Internet available. After the initial install is done, then I move the server to the server closet and connect a wired Ethernet cable to provide Internet connectivity.\npasswd vincent Changing password for vincent. Current password: New password: Retype new password: passwd: password updated successfullyCheck and set hostname, Time and date Since this is a server, chances are that looking at logs etc it will be important to make sure the times are correct.\nhostnamectl timedatectl timedatectl list-timezones | grep Australia sudo timedatectl set-timezone Australia/Brisbane timedatectl Local time: Fri 2023-11-17 14:46:55 AEST Universal time: Fri 2023-11-17 04:46:55 UTC RTC time: Fri 2023-11-17 04:46:55 Time zone: Australia/Brisbane (AEST, +1000) System clock synchronized: yes NTP service: active RTC in local TZ: noSSH Keys Below is a list of commands to use different ssh keys for each server. Or you could just use one ssh key for all servers.\nIMPORTANT Give each key a unique name, or every time you generate a new key the old one will get overwritten.\nssh-keygen -t ed25519 -C \"Dell-Laptop\" // Generate key Enter file in which to save the key (/home/vincent/.ssh/id_ed25519): /home/vincent/.ssh/galadriel // Give unique name to key Enter passphrase (empty for no passphrase): ssh-copy-id -i ~/.ssh/galadriel.pub galadriel // Copy key to serverSudo I don’t like having to type long complicated passwords all the time, so I make the following changes.\nAlways use visudo to edit file. Add the following line to the end of the file. Change user_name for your actual user name.\nsudo visudo user_name ALL=(ALL) NOPASSWD:ALL # NO passwd",
    "description": "",
    "tags": [
      "tutorial",
      "server"
    ],
    "title": "Ubuntu Server",
    "uri": "/homelab/ubuntu-server/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Image test I love technology.\nBut, sometimes technology does not love me!\nThis site will be my more public notes about technology/home lab experiences.\n",
    "description": "",
    "tags": null,
    "title": "About",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Server",
    "uri": "/tags/server/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Server",
    "uri": "/categories/server/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Setup",
    "uri": "/categories/setup/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Tutorial",
    "uri": "/tags/tutorial/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Content",
    "uri": "/categories/content/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Hugo",
    "uri": "/tags/hugo/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Hugo",
    "uri": "/categories/hugo/index.html"
  }
]
