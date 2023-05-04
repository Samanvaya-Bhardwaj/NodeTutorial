var MongoClient = require('mongodb').MongoClient;
// imports the MongoClient object from the MongoDB driver.
var url = "mongodb://127.0.0.1:27017";
// The url variable contains the URL of the MongoDB server to connect to.
var client=new MongoClient(url);
// The client variable creates a new MongoClient instance with the url.

// The createCollection function is defined with the async keyword
// to allow the use of await inside the function.
async function createCollection(){

try{
client.connect() //, client.connect() is called to connect to the MongoDB server.
var dbo = client.db("ke049");
// The dbo variable is assigned to the db method of the client instance with the database name "db5".
await dbo.createCollection("student_details")
// creates a new collection called "student_details" in the "db5" database using the createCollection method.
// We use await to pause the execution of the function until the promise is resolved
console.log("Collection created");
}
catch(err)
{
console.log(err);

}
client.close()
}
createCollection();