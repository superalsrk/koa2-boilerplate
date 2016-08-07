'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';


import RouterMain from './main';
import RouterAuth from './auth';
import RouterOpen from './open';

const router = new Router();

router.use('/api',  RouterMain.routes(), RouterMain.allowedMethods())
router.use('/auth', RouterAuth.routes(), RouterAuth.allowedMethods())
router.use('/open', RouterOpen.routes(), RouterOpen.allowedMethods())

export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}