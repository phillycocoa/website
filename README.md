# Philly CocoaHeads Website

> The following site is still in development.

This repo is the content source for the Philly CocoaHeads website, hosted at: <phillycocoa.org>. The site is built using the static site generator [Hugo](https://gohugo.io/), hosted on [Amazon S3](https://aws.amazon.com/s3/) and deployed using [CircleCI](http://circleci.com).

Current development staging is at: <http://phillycocoa.org.s3-website-us-east-1.amazonaws.com/>

## How to Contribute

If you spot a typo or other bug, want to works towards an existing issue, please fork the repo and do a pull request.

If you have a new idea, we'd ask you make a GitHub issue so the idea can be discussed before work is started.

Once changes are merged into `master` our CI system will auto deploy the site to S3.

## Working with Hugo

Hugo is a static site generator written in Go. The easiest way to get Hugo is through [Homebrew](https://brew.sh/).

````
brew update
brew install hugo
````

Then from the command line, to launch a local server use:

`hugo server --theme=phillycocoaheadtheme --buildDrafts`

Afterwords, point your browser at <http://localhost:1313/> and you'll see our site. The site should [Live Reload](https://gohugo.io/extras/livereload/) as you make content changes.

Hugo has some great [documentation](https://gohugo.io/overview/introduction/) but I'll try to cover the basics here.

To make a new page or blog post, just duplicate one of the current files. Be sure the front matter (the metadata at the top) is up to date and accurate.

> While there is a command line for hugo to make new pages or blog post we have not built those tools into our custom template [yet](https://github.com/phillycocoa/website/issues/12).

For example `pages` usually have a type and title:

````
---
type: page
title: About
---
````

The `type` helps identify how the content should be rendered and the `title` will be the title used for the `HTML` `title` tag.

For blog posts there is a `date` and `draft` flag.

If you need to add images, look to the `/static/` folder. Those files will be posted to the root of the site and you can assume your image will live at: `/images/hello.png`.

