# component-library-react
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
![build](https://github.com/byjs-dev/component-library-react/actions/workflows/build-release-package.yml/badge.svg)
![release](https://img.shields.io/github/v/release/byjs-dev/component-library-react)
![license](https://img.shields.io/github/license/byjs-dev/component-library-react)

## Intro
This my personal playground for building a react component library with Vite v4 and Storybook v7 and trying out several features.

## Setup
### Node
Make sure to use the correct Node and NPM versions, as shown in package.json "engines".
If you use nvm, just run ```nvm use``` inside this project's root directory.

### Install dependencies
Run ```npm install```

### Develop
Run ```npm run dev``` to run the dev server, showing the current Application.

### Build
Run ```npm run build``` to manually create the library files into the /dist folder

### Release new Package
A new library version as Github NPM Package will only be released by the CI pipeline if a pull request on main, with relevant code changes, has been merged.

## TODO
* fonts
  * build fonts (charsets, faces etc) 
  * add fonts
  * usage -> css / tailwind config
  * add to library assets -> npm package
* configure storybook v7
  * cleanup examples
  * add intro
  * add first component
  * add theming
  * add testing
    * test runner 
    * a11y
    * playwright e2e (check visual/snapshot tests)
* edit workflows:
    * add testing
    * ?(pre-release workflow : package-pre-release + add storybook staging/pre-release deployment to gh-pages)
    * add storybook production deployment to gh-pages 
* cleanup dev -> remove App.jsx etc., after storybook is running
* cleanup current components
* check tailwind custom theming/config regarding design tokens + add to lib package
