# WEB102 Prework - Sea Monster Crowdfunding

Submitted by: **Prasiddha Paudel**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **4 hours** spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions, total dollars raised, and the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding.
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.
* [x] A search box is added above the game list to filter games by name dynamically.

The following **optional** features are implemented:

* [x] CSS styling with flexbox for stats and game cards.
* [x] Hover effects on stats cards with box-shadow and pointer cursor.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://drive.google.com/file/d/1-PycS9Xjl35uxMjx5aurdaiJ7NymDOfj/view?usp=sharing' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Notes

Challenges encountered while building the app:

* Calculated total contributions, total dollars raised, and number of unfunded games using `reduce` and `filter`.
* Dynamically displayed all games using `addGamesToPage()` and updated game cards with filtering logic.
* Implemented buttons to show all games, only funded games, and only unfunded games using event listeners.
* Added a search box above the game list to filter games by name in real time.
* Styled stats and game cards using flexbox and hover effects with box-shadow to improve UX.
* Displayed the top two most funded games at the top of the stats section using destructuring and the spread operator.

## License

    Copyright 2025 Prasiddha Paudel

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
