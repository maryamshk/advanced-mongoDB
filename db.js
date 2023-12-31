const { MongoClient } = require('mongodb')   //allow us to connect to db

let dbConnection
let uri="mongodb+srv://mariumxyz:<brooklyn99>@cluster0.oawpejp.mongodb.net/?retryWrites=true&w=majority";

module.exports={
    //to initially connect to database    
    connectToDb:(cb)=>{     //we are gonna return callback function cb from another file after connecting to db    
        // this is connection string for local databse in computer 
        MongoClient.connect(uri) //arg is connection string(in order to connect to right db)
        .then(client => {    //client we just created connected to db
            dbConnection = client.db()    //db returns interface through which we can interact with db we're connected to  
            return cb()
          })
          .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    
    getDb: () => dbConnection
    //return our db connection
    
    
}


