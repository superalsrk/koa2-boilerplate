koa2-boilerplate
====

This boilerplate shows ways to 

+ Use mysql in Koa2
+ CORS Ajax request
+ Ajax Login and Ajax Logout in Koa2, based on [koa-passport](https://github.com/rkusa/koa-passport) and [passport-local](https://github.com/jaredhanson/passport-local)
+ Export excel in Koa2, based on [excel-export](https://github.com/functionscope/Node-Excel-Export)
+ Serve static files in Koa2
+ Integrate with Redux App


### Usage

```
$ npm install 
$ npm run start
```

## Screenshots

+ Login Page

![Login Page](./src/public/assets/img/screenshots/koa-2-login-osx.jpeg)


### Structure

```bash
.
├── README.md
├── app
│   └── entry.js
├── package.json
├── src
│   ├── app.js
│   ├── config
│   │   ├── base.js
│   │   ├── config.js
│   │   └── passport.js
│   ├── lib
│   │   └── db.js
│   ├── middleware
│   │   ├── checkauth.js
│   │   └── index.js
│   ├── models
│   │   └── account.js
│   ├── public
│   │   └── index.html
│   └── routes
│       ├── auth.js
│       ├── index.js
│       ├── main.js
│       └── open.js
├── start.js
└── webpack.config.js
```



