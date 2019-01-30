# eatDaBurger

## Description
eatDaBurger is a burger logger app.

The app is deployed to Heroku via this link: https://glacial-falls-63921.herokuapp.com/

It lists all the burgers available in the menu (ie the mySQL database) to the user with a "Devour it" button.
Once the user click on the button, the burger is devoured and moved to the list of already devoured burgers ("These were delicious" list).

The user can also add a new burger to the list.
The new added burger will then, appear on the list of "Burgers waiting to be devoured".


![](app_demo.gif)

If you want to use the app locally, follow these steps:
 - clone the gitHub repository, locally using this command from the command line: "git clone https://github.com/Yfatou/eatDaBurger.git"
 - run the following commands from the command line:
    * npm init
    * npm install express
    * npm install mysql
    * npm install express-handlebars
    * npm install method-override
    * npm install body-parser
 - start the application using the command: "node server.js"

## Technologies used
   * Javascript
   * JQuery
   * Node js
   * Express
   * Bootstrap
   * Handlebars
   * Orm