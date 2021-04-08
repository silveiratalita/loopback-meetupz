'use strict';

module.exports = function(Meetups) {
    Meetups.remoteMethod('concat',{
        http: {path: '/concat', verb: 'post'},
        accepts: [
            {arg: 'input', type: 'object', required: true, http: {source: 'body'}}
        ],
        returns: [
        {arg: 'value', type: 'string'}
        ]
    });

    Meetups.concat = function(input, cb){
        console.log('teste')
        cb(null, `${input.city}-${input.adress}`);
       
    }

};
