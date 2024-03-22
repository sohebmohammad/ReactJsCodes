const {MongoClient}=require('mongodb');
const dbConnect = require('./mongoConnection');
const url='mongodb://localhost:27017';

const database='collage';
const client=new MongoClient(url);

/* async function getData(){
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('student');
    let response=await collection.find({}).toArray();
    console.log(response);
} */
const main=async()=>{
    let data=await dbConnect();
    data=await data.find({firstName:'John'}).toArray();
    console.log(data);
}
main();