const mongoose = require('mongoose');
// const mongoURI ='mongodb+srv://Akash4328:Akash123@cluster0.22ezauk.mongodb.net/'
const mongoURI ="mongodb+srv://Akash4328:Akash123@cluster0.22ezauk.mongodb.net/gofoodmern?retryWrites=true&w=majority"

const mongoDB = async  () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongodb connected')
        const fetch_data= await mongoose.connection.db.collection("food_items");
        fetch_data.find({}).toArray(function (err,data){
            if(err){
                console.log("error aa gya " + err);
            }else{
                console.log(data);
            }
        })
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    }
module.exports = mongoDB;

