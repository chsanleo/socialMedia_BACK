# Backend, socialMedia
![badge](https://img.shields.io/badge/working-active-brig)

Backend proposed as a final project to show our improvements with the different tools we study across the FullStack Bootcamp. 
For the current project we will use NodeJs as a technology to work with the backend. Also for the database we choose use two technologies: SQL and MongoDB. The first one is used to the user logic and the second one for the events and messages.

The data is storage in two different databases, local SQL to manage the data relative to the users and a remote MongoDB to manage the different events and messages of users.

We wanted to go further and we installed different libraries, adding some extra features to our applications like the creation of logs or the possibility to test directly from the web with Swagger UI. 


## How to Start 🚀

+ If you only want to use our Api/Backend, just clone this repository 
```
 git clone https://github.com/chsanleo/socialMedia_BACK
```

+ and install the packages,

```
$ npm install
```

+ run the migrations to create the database

```
$ sequelize db:migrate
```

+ populate the database with basic data

```
$ sequelize db:seed:all
```
 
+ and... WORK! (in that step can be used as a API).

## Project status

>Is not finish and we are working adding more features and improvements on it, also fixing some small details ;).

### Current Features 📄

+ Create a User and Tokens and manage it.
+ Only one Token is valid per User/session.
+ The creation of a user is automatic when introduce the email in the registrarion.
+ Events can be created and write comments, likes and join it.
+ Combine SQL and MongoDB for management data.
+ Different configuration files, you can personalize completely followin the example.
+ One exist one "Admin", to add new "Admin" must update manually the DB.
+ All the information about country are real.
+ User model is controlled the entry and the return to provide security.
+ Validations, conversions and utils are files created to group all the process we need to use in all the app.

### Roadmap 📋

**About the back**
+ Create a administration panel.

**About the documentation**
+ Can use the automatic swagger documentation.

**About features**
+ Create a different searches to search users or events.
+ Add features to events like age control and so on.


## Test the application ⚙️

Turn on the server.
```
$ npm start
```

You can use the swagger API to test each back feature (not finish yet >_<).
```
localhost:3005/api-doc
```

Or you can use Postman instead.


Use the browser of your choice and with the developer tools test. 


![devtools](https://www.formacionprofesional.info/wp-content/uploads/2015/09/herramientas_desarrollo_iexplorer11.png)

## Used Tools 🛠️

* [Axios](https://www.npmjs.com/package/axios) - HTTP client
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Cyper 
* [express-oas-generator](https://www.npmjs.com/package/express-oas-generator) - API docs autoGenerate
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Token
* [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB ORM
* [Morgan](https://www.npmjs.com/package/morgan) - Logs
* [Mysql2](https://www.npmjs.com/package/mysql2) - MySQL client
* [Sequelize](https://www.npmjs.com/package/sequelize) - ORM
* [Swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) - API docs
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - API docs
* [Winston](https://www.npmjs.com/package/winston) - Logs

## Contributors ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)


## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Ask us before use and ask us for another features or documentation we didn't include.


## How to say 'thanks' to us  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to us (or two, or... some ;) ). 
* Comments about always welcome!.