'use strict';

import Router from 'koa-router';

const router = new Router();


router.get('/summary', async (ctx, next) => {
    ctx.body = {
        'status' : 200,
        'data' : {
            'totalVisitors' : '3,291,922',
            'bounceRate' : '20.44%',
            'uniqueVisitors' : '1,291,922',
            'avgTime' : '00:12:23'
        }
    }
})

router.get('/linechart', async (ctx, next) => {
    ctx.body = {
        'status' : 200
    }
})

router.get('/table', async (ctx, next) => {
    ctx.body = {
        'status' : 200
    }
})

export default router;