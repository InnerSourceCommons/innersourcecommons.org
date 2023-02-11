# InnerSource Commons Website

This repo is powering the InnerSource Commons Website at [innersourcecommons.org][].

The site is built with Hugo framework. All content is located at the `content` folder.

## How to change information on the site

It can be done easily via editing the content in this repository.
Just make changes through GitHub UI or clone the repository to your computer and push to remote.
Create a Pull Request and after the review changes will be automatically uploaded to the site.

### Adding Widgets

If you are adding any widgets to the site, please check if they add cookies by clicking the lock in front of the URL in your browser and checking the cookies before and after you add the widget.

In case the widget adds cookies to the website please update the Privacy Policy (`content/about/privacy.md`) with the new cookies.

## Installation and local run

If you want to test the page before commit you can run the site locally.
you need to have `git` and [hugo][] installed. Please follow the official installation instructions.

```sh
git clone [url]
cd innersourcecommons.org
hugo server
```

## Making changes to specific pages

### Adding a logo to the Stories page

You can add your own organization to the [Stories Page][stories], to showcase that you are practicing InnerSource.
Note: You can even do that for other organizations, given that you can point to public evidence of that org talking about their InnerSource approach.

To add a new logo/org to the Stories page, please fill in [this issue][issue-template] and follow the instructions in there.

## i18n Support

To increase familiarity with the InnerSource concept among non-English speakers, the ISC website provides pages in multiple languages. These translations are completed by volunteer contributors and are not immediately available for all pages. As a result, there may be a significant amount of content that is currently in the process of being translated. We welcome any contributions to the translation effort!

Instructions can be found [here](i18n.md).

[innersourcecommons.org]: https://innersourcecommons.org
[hugo]: https://gohugo.io/getting-started/installing/
[stories]: https://innersourcecommons.org/stories/
[issue-template]: https://github.com/InnerSourceCommons/InnerSourceMarketing/issues/new?assignees=&labels=website&template=add-a-new-org-logo-to-the-website.md&title=Add+%5Borganisation+name%5D+logo+to+the+Stories+Page
