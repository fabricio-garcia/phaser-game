<!-- PROJECT SHIELDS -->
<!--
*** "reference style" links are used for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-open-url]
[![Issues-closed][issues-closed-shield]][issues-closed-url]

# phaser-game

> Game webapp using Phaser 3

</br>
<div align="center">
    <img src="phaser-game.gif">
    <a href="http://phaser-game.surge.sh/"><h1 width="90">JUMPING RABBIT</h1></a>
</div>

# Table of Contents

- [About](#about)
- [About the game](#about-the-game)
  - [History](#history)
  - [Code](#code)
  - [How to play](#how-to-play)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Available scripts](#available-scripts)
- [Live Demo](#live-demo)
- [Built With](#built-with)
- [Tests](#tests)
- [Authors](#authors)
- [Contributing](#contributing)
- [Show your support](#show-your-support)
- [Acknowledgments](#acknowledgments)
- [License](#license)

# About

This is my Capstone project for Microverse's JavaScript course. In this project, the goal was to build a shooter game using JavaScript with the Phaser 3 framework and Webpack.

# About the game

This is my Capstone project for Microverse's JavaScript course. In this project, the goal was to build a shooter game using JavaScript with the Phaser 3 framework and Webpack.

## History

This project is based on the book Ourcade Tutorial: Infinite Jumper in Phaser 3. The book explains the basics of the Phaser 3 framework in a clear and fun way using no more than HTML, JavaScript and a Phaser CDN. I transform that to an NPM project and on top of that I added the Webpack configuration and a little bit of code CSS3. In the process I created extra scenes and helper files to make calls to the API, make the text flashing, and use google fonts.

## Code

To accomplish with the assessment criteria, the code is encapsulated using ES6+ modules and deals with async data. Each scene in the game is linked to the others by using buttons or in some cases using tha space bar. All the bundling is done through Webpack. The score system was implemented with the assistance of JavasCript event-loops of type async ... await, keeping the structure of the game simple and avoiding the need of other technologies like localStorage. All the testing is done via Jest. Of course the project make use of linters to maintain code standards.

## How to play

- Hit the Instructions button for an in-game description
- Hit the Play button to start the game.
- Use the left, up and right arrow keys to move the Rabbit up.
- If you fall from the platform game is over
- Optional: submit your score to the score board.

# Getting Started

> To get a local copy up and running follow these simple example steps:

## Prerequisites

- `npm`
- `git`

## Setup

To install the game locally

- Download or clone the [game repository](https://github.com/fabricio-garcia/phaser-game).
- Navigate to the game root directory from your terminal.
- Install the required packages with the following command:

```javascript
npm i
```

- Start the game in your browser by typing:

```javascript
npm run start
```

## Available scripts

- `npm run start`: Runs the app in the development mode.

- `npm run build`: Builds the game for production to the build folder.

# Live Demo

[Play Jumping Rabbit](https://phaser-game.surge.sh)

# Built With

- [Phaser 3](https://phaser.io/phaser3)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Babel](https://babeljs.io/)
- [WebPack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
- [VS Code](https://code.visualstudio.com/)
- [Kubuntu](https://kubuntu.org/)

# Tests

- Run `npm run test` in your terminal (check that you are in the repo's folder) to run unit tests for the logic components.

# Author

👤 **Fabricio Garcia**

- Github: [@fabricio-garcia](https://github.com/fabricio-garcia)
- Twitter: [@fabgrel10](https://twitter.com/fabgrel10)
- Linkedin: [@fabricio-garcia](https://linkedin.com/fabricio-garcia)

# Contributing

Contributions, issues and feature requests are welcome! 🤝

Feel free to check the [issues page](issues/).

# Show your support

Give a ⭐️ if you like this project!

# Acknowledgments

- [Ourcade](https://ourcade.co/) for the [Infinite Jumper in Phaser 3](https://ourcade.co/books/infinite-jumper-phaser3/) tutorial.
- [Kenney](https://kenney.nl/)'s [jumper pack](https://kenney.nl/assets/jumper-pack) and [interface sounds](https://kenney.nl/assets/interface-sounds).
- Thank you [shshamim](https://github.com/shshamim63) for the valuable advice on this project.

# License

This project is [MIT 📝](https://opensource.org/licenses/MIT) licensed.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/fabricio-garcia/phaser-game?style=plastic
[contributors-url]: https://github.com/fabricio-garcia/phaser-game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fabricio-garcia/phaser-game?style=plastic
[forks-url]: https://github.com/fabricio-garcia/phaser-game/network/members
[stars-shield]: https://img.shields.io/github/stars/fabricio-garcia/phaser-game?style=plastic
[stars-url]: https://github.com/fabricio-garcia/phaser-game/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/fabricio-garcia/phaser-game?style=plastic
[issues-closed-url]: https://github.com/fabricio-garcia/phaser-game/issues
[issues-closed-shield]: https://img.shields.io/github/issues-closed/fabricio-garcia/phaser-game?style=plastic
[issues-open-url]: https://github.com/fabricio-garcia/phaser-game/issues
