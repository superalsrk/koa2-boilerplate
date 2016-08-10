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
    let pv = [[1, 40], [2, 50], [3, 60], [4, 60], [5, 60], [6, 65], [7, 75], [8, 90], [9, 100], [10, 105], [11, 110], [12, 110], [13, 120], [14, 130], [15, 135], [16, 145], [17, 132], [18, 123], [19, 135], [20, 150]];
    let uv = [[1, 10], [2, 6], [3, 10], [4, 12], [5, 18], [6, 20], [7, 25], [8, 23], [9, 24], [10, 25], [11, 18], [12, 30], [13, 25], [14, 25], [15, 30], [16, 27], [17, 20], [18, 18], [19, 31], [20, 23]];
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