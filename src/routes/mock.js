'use strict';

import Router from 'koa-router';
import NodeExcel from 'excel-export';

const router = new Router();


router.get('/summary', async (ctx, next) => {
    ctx.body = {
        'status' : 200,
        'data' : {
            'totalVisitors' : '3,491,922',
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

    let origin = []
    for (let i = 0; i < 20; i++) {
        origin.push(Math.floor(Math.random() * 300) + 90 )
    }

    let pv = origin.map( (i, index) => {return [index+1, i]})
    let uv = origin.map( (i, index) => {return [index+1, Math.floor(i/3.0)]})
    let legends = [[1, ""], [2, ""], [3, "May&nbsp;15"], [4, ""], [5, ""], [6, "May&nbsp;19"], [7, ""], [8, ""], [9, "May&nbsp;22"], [10, ""], [11, ""], [12, "May&nbsp;25"], [13, ""], [14, ""], [15, "May&nbsp;28"], [16, ""], [17, ""], [18, "May&nbsp;31"], [19, ""], [20, ""]];
   
    ctx.body = {
        'status' : 200,
        'data' : {
            'pv' : pv,
            'uv' : uv,
            'legends' : legends
        }
    }
})


export default router;