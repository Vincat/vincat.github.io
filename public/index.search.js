var relearn_search_index = [
  {
    "breadcrumb": "",
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "Basics",
    "uri": "/basics/index.html"
  },
  {
    "breadcrumb": "Home Lab Notes",
    "content": "Install and initial setup These are the steps I do for an initial setup.\nSomethings here may be controversial, but, just remember these server will never be exposed to the Internet. I will only access these locally, or over VPN.\nI am running PiHole for my local DNS, so I remember each service by name. Also because I do A lot of changes etc, I can’t be bothered entering my password every 5 minutes.\n",
    "description": "",
    "tags": [
      "tutorial",
      "Ubuntu"
    ],
    "title": "Ubuntu Server",
    "uri": "/homelab/ubuntu-server/index.html"
  },
  {
    "breadcrumb": "Basics",
    "content": "Intro To get started, you need to install Hugo, then pick a theme, then add content.\nRelearn This is the theme I have picked.\nThe below 2 commands , Creates a top level entry in the menu, while the second one created a sub menu item of that previous entry.\nhugo new --kind chapter homelab/_index.md hugo new homelab/first-content.mdFront matter I have edited the /archtype/default.md file to look like below.\n+++ title = '{{ replace .File.ContentBaseName \"-\" \" \" | title }}' date = {{ .Date }} categories = [\"taxonomy\", \"content\"] tags = \"tutorial\" draft = true weight = x +++",
    "description": "",
    "tags": [
      "tutorial",
      "hugo"
    ],
    "title": "Getting Started",
    "uri": "/basics/getting-started/index.html"
  },
  {
    "breadcrumb": "Home Lab Notes",
    "content": "Docker Setup These are my notes on setting up Docker on a Ubuntu server 22.04.\n",
    "description": "",
    "tags": [
      "tutorial",
      "docker"
    ],
    "title": "Docker",
    "uri": "/homelab/docker/index.html"
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
    "title": "Tag :: Docker",
    "uri": "/tags/docker/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Docker",
    "uri": "/categories/docker/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Home Lab Notes",
    "uri": "/homelab/index.html"
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
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: Ubuntu",
    "uri": "/tags/ubuntu/index.html"
  },
  {
    "breadcrumb": "Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Category :: Ubuntu",
    "uri": "/categories/ubuntu/index.html"
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
