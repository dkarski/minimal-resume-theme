# Minimal Resume Theme

<p align="center">
  <img src="screenshots/resume-desktop.png" width="578" />
  <img src="screenshots/resume-mobile.png" width="220" />
</p>

## Introduction

This is a responsive minimal résumé template.

You may config all the data in `json` and make it your own résumé. Then, you might use on GitHub Pages, your website, or wherever you want.

[DEMO](https://dkarski.github.io/minimal-resume-theme/)

## Features

* Simple, elegant, and minimal design
* PC and mobile friendly, but it looks better on PC
* PDF supports and print friendly
* Flexible and extensible

## Usage

### Local Mode

1. Clone the repo

    ```shell
    git clone https://dkarski.github.io/minimal-resume-theme/
    ```

2. Install Jekyll

    ```shell
    npm install
    ```

3. Config your résumé data

    The `homepage` is required in `package.json` if you serve this page on GitHub Pages. And your contact information, __EDUCATION__, __SKILLS__, __EXPERIENCE__, and __PROJECTS__ data will be set in `src/data/resume.json`.

4. Run and Debug

    ```shell
    npm start
    ```

5. Build

    ```shell
    npm build
    ```

6. Deploy on GitHub Pages

    ```shell
    npm deploy
    ```
    
## Extending Sections

1. Add new section in `src/data/resume.json`

  ```json
  {
    "summary": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
  ```

2. Add section to `src/App.js`:


  ```html
  import React from 'react';
  
  const Summary = ({ summary }) => {
    return (
      <div>
        <h1>Summary</h1>
        <p>{summary}</p>
      </div>
    );
  };

  ```
  
  ```html
  import React from 'react';
  import resume from './data/resume.json';
  
  const App = () => {
    return (
      <Summary summary={resume.summary} />
    );
  }
  ```

## Showcases

Feel free to add yours here.

* [Daniel Karski](https://danielkarski.pl/)

## Donation

* [Buy Me A Coffee](https://www.buymeacoffee.com/7eRzBIy)
* [PayPal](https://www.paypal.me/dkarski)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
