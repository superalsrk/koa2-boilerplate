'use strict';

import Router from 'koa-router';
import NodeExcel from 'excel-export';

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

router.get('/export/pv', async (ctx, next) => {
    let conf = {}
    conf.cols = [{
        caption:'Header',
        type:'string',
        width: 145
    }]
    
    conf.rows = [['value01'], ['value02'], ['value03']] 
    
    ctx.type = 'application/vnd.openxmlformats'
    ctx.attachment( "Report-PV.xlsx")
    ctx.body = new Buffer(NodeExcel.execute(conf), 'binary')
})

router.get('/export/uv', async (ctx, next) => {
    let conf = {}
    conf.cols = [{
        caption:'Header',
        type:'string',
        width: 145
    }]
    
    conf.rows = [['value01'], ['value02'], ['value03']] 
    
    ctx.type = 'application/vnd.openxmlformats'
    ctx.attachment( "Report-UV.xlsx")
    ctx.body = new Buffer(NodeExcel.execute(conf), 'binary')
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