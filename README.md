# Cherry-s-blog

| Contents
|---
| [Description](#description)
| [Project design](#project-design)
| [Overview](#overview)
| - [Landing page](#landing-page)
| - [Login page](#login-page)
| - [Register page](#register-page)
| - [My profile page](#my-profile-page)
| - [Catalog page](#products-page)
| - [Recipe details page](#product-details-page)
| - [Error page](#error-page)
| [Getting Started](#getting-started)
| [Backend](#backend)

## Description
That's my final project for ReactJS course in SoftUni
## Project design
I sketched my application using Figma, and then implemented it using HTML and CSS. The design is responsive, and the website works correctly on every device.
## Overview
It's **blog** website for sweets where authorized and unauthorized users can view different recipes.

- Navigation for logged users

![navigation logged user img]()
- Navigation for unlogged users

![navigation unlogged user img]()
### Landing page


![landing page img]()
### Login page


![login page img]()
### Register page


![register page img]()
### My profile page
T

**NOTE:** The practice server does not support user delete, so you will still be able to log in even after a successful deletion

![my profile page img]()

![my profile page img]()
### Catalog page


![catalog page img]()
### Recipe details page


![recipe details page img]()
### Error page

![error page img]()
## Getting Started

* Clone the repo from github.
* Open integrated terminal on cherry-s-blog directory and run `npm install` and wait till the end of installation.
* Change directory `cd ./server`.
* Run `node server.js` to start the server.
    It will run on http://localhost:3030/
* Open new terminal for the front-end. 
* Go back to cherry-s-blog directory `cd ../`.
* Run `npm start` to start the application. 
* Navigate to `http://localhost:3000/` and reload the page.

## Backend
The backend is built using Node.js and Express.js.

[I've used SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server/tree/master)
