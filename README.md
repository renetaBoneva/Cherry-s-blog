# Cherry-s-blog

| Contents
|---
| [Description](#description)
| [Project design](#project-design)
| [Overview](#overview)
| - [Landing page](#landing-and-catalog-page)
| - [Login page](#login-page)
| - [Register page](#register-page)
| - [My profile page](#my-profile-page)
| - [Edit profile page](#edit-profile-page)
| - [Recipe details page](#recipe-details-page)
| - [Recipe edit page](#recipe-edit-page)
| - [Recipe delete page](#recipe-delete-page)
| - [Error page](#error-page)
| [Getting Started](#getting-started)
| [Backend](#backend)

## Description
That's my final project for ReactJS course in SoftUni.
## Project design
I sketched my application using Figma, and then implemented it using HTML and CSS. The design is responsive, and the website works correctly on every device.
## Overview
It's **blog** website for sweets where authorized and unauthorized users can view different recipes.

- Navigation for guests

![navigation unlogged user img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/nav-for-unauthorized.png)
- Navigation for logged users

![navigation logged user img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/nav-for-authorized.png)
### Landing and catalog page


![landing page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/home-page.png)
### Login page


![login page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/login-page.png)
### Register page


![register page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/register-page.png)
### My profile page


![my profile page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/my-profile-page.png)
### Edit profile page

![edit profile page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/edit-profile-page.png)
### Recipe details page

For guests:
![recipe details-guest page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/details-for-guests.png)

Fou authorized user, who is NOT owner of the recipe: 
![recipe details-NOT-owner page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/details-for-authorized-but-not-owner.png)

Fou authorized user, who is owner of the recipe: 
![recipe details-owner page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/details-for-authorized-owner.png)
### Add recipe page


![add recipe page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/add-recipe-page.png)
### Recipe edit page


![recipe edit page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/recipe-edit-page.png)
### Recipe delete page


![recipe delete page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/recipe-delete-page.png)
### Error page

![error page img](https://github.com/renetaBoneva/Cherry-s-blog/blob/main/design/for%20README/error-page.png)
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
