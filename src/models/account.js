'use strict';

import db from '../lib/db'
const Account = {}

Account.findOne = function (id, cb) {
    // db.queryAsync('select * from t_account where id = ?', [id], function(err, results) {
    //     if(results == null || results.length == 0) {
    //         err = Error('empty')
    //     }
    //     cb(err, results[0])
    // })
    
    //Mock Scripts
    const account = {"id": 1, "username" : "test", "password" : "test"}
    cb(null, account) 

}

Account.verify = async function(username, password) {

    //let account = await db.query('select * from t_account where email = ?', [username])

    //Mock Scripts
    let account = [{"id": 1, "username" : "test", "password" : "test"}]

    if(account == null || account.length != 1) {
        return null;
    } else{
        if(account[0].password != password) {
            return null;
        } else {
            return account[0];
        }
    }
}

export default Account;