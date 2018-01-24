module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["mobilebackend"] = {
        host: "mobilebackend.cvmlduwb8e2g.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "rnavagamuwa",
        password: "12345678",
        database: "mobileBackend",
    };
    this.dbConnections["test3"] = {
        host: "test3.cvmlduwb8e2g.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "rdsuser",
        password: "12345678",
        database: "firstDB",
    };
    
    };