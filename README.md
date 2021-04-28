# InnerSource Commons Website

This repo is powering the InnerSource Commons Website at [innersourcecommons.org](https://innersourcecommons.org).

The site is built with Hugo framework. All content is located at the `content` folder.

## How to change information on the site

It can be done easily via editing the content in this repository.
Just make changes through GitHub UI or clone the repository to your computer and push to remote.
Create a Pull Request and after the review changes will be automatically uploaded to the site.

### Adding Widgets

If you are adding any widgets to the site, please check if they add cookies by clicking the lock in front of the URL in your browser and checking the cookies before and after you add the widget.

In case the widget adds cookies to the website plese update the Privacy Policy (content/about/privacy.md) with the new cookies.

## Installation and local run

If you want to test the page before commit you can run the site locally.
you need to have `git` and [hugo](https://gohugo.io/getting-started/installing/) installed. Please follow the official installation instructions.

```
$ git clone [url]
$ cd innersourcecommons.org
$ hugo server
```
