# IntraCDL UI

The user interface for the IntraCDL website.

View at: https://cdlib.github.io/intracdl-ui

This includes a developer toolkit using the [Fractal](https://fractal.build) component library and [Parcel](https://parceljs.org) build tool.

## Installation

Requires Node, npm and Font Awesome Pro token.

1. Add the Font Awesome Pro token as a [GitHub Actions secret](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md) named `FONTAWESOME_TOKEN`.

2. Add a **.npmrc** file within the project root using the [Per-Project](https://fontawesome.com/v5/docs/web/setup/use-package-managers#per-project) settings for Font Awesome Pro, including your token. This file is automatically ignored by Git and should not be committed.

3. Run `npm install`.

## Developing

1. Run `npm run serve`

This will watch and compile **.hbs**, **.css**, **.js**, and **/images/** files as you work on them.

2. Go to http://localhost:3000 to view pages, components ane elements within the Fractal web interface.

To test the UI on other devices (phone, tablet, etc.), use the Fractal Server Network URL listed in your CLI at first run.

## Building

Run `npm run build`.

All UI assets, including **main.css**, **main.js**, minified images and font files will be compiled to **/dist/**.

## Publishing to GitHub Pages

This requires *GitHub Actions* to be selected from the the Build and deployment source within the **Pages** section in the **Settings** menu.

Pages, components and elements within the Fractal Web interface will be published to your GitHub Pages URL upon each push to the repository.
