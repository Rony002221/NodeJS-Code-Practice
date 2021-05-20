var mysql = require('mysql');

var dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsdb'
}

var connection = mysql.createConnection(dbConfig);

// to established connection with db we have to use the connect() function
connection.connect(function (error){
    if(error)
    {
        console.log('Connection Failed !!');
    }
    else
    {
        console.log('Connection Established !!');
    }
});