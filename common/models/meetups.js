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
    Meetups.remoteMethod('createMeetup',{
        http: {path: '/createMeetup', verb: 'post'},
        accepts: [
            {arg: 'body', type: 'object', required: true, http: {source: 'body'}}
        ],
        returns: [
        {arg: 'value', type: 'object'}
        ]
    });
    
//cria um meetup

//   const meetupCreated =  Meetups.create({city: 'foo@bar.com', password: 'bar'}, function(err, userInstance) {
//       console.log(userInstance);
  
Meetups.createMeetup = function(body,cb){
    const meetupCreated =  Meetups.create(
        {city: body.city, adress: body.adress, name:body.name},
        function(err, cbk){
            if(err){
                throw new Error(err);
        }else{
            console.log(cbk)
        }
    }
        );
        cb(null, meetupCreated);

}



    Meetups.concat = function(body, cb){

        console.log('teste')
        cb(null, `${body.city}-${body.adress}`);
       
    }

};
