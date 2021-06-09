# sequelize

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

install loopback looback-cli using

npm i -g @loopback/cli note: required { node: '^10.16 || 12 || 14 || 16' }

To create loopback project

lb4 app

this command will create all the nessesary files for your project architecture with one demo ping controller ready to use project

Install sequelize and mysql

npm install --save sequelize

npm install --save mysql2

Create connection object using Sequelize

import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('DATABASE_NAME', 'DATABASE_USER', 'DATABASE_PASSORD', {
dialect: 'mysql', //DB system you are using eg postgres
host: 'localhost', //Your host address
});

after this import object into your app.ts / index.ts your main application file
and call sync() of sequelize class
sequelize.sync() will fetch all your configuration and try to connect with Database
after the successfull connection with the database it fire query SELECT 1+1 AS result
to ensure your database connection

onces connection is established then it will create all the tables with respect to
the models you defined using same sequelize object

you can eigther import models usiing requre('model/path') or import('model/path')
before calling sync().
