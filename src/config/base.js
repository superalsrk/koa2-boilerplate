'use strict';

import compose from 'koa-compose';
import convert from 'koa-convert';
import cors from 'kcors';
import Serve from 'koa-static';
import Logger from 'koa-logger';
import mount from 'koa-mount';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';


import _ from './passport';
import passport from 'koa-passport';

export default function middleware(app) {

    app.proxy = true;

    app.use(cors({ credentials: true }));
    app.use(convert(Logger()))
    app.use(bodyParser())
    app.use(mount("/", convert(Serve(__dirname + '/../public/'))));

    app.keys = ['miaozhen-session-key'];
    app.use(convert(session()))

    app.use(passport.initialize())
    app.use(passport.session())

}