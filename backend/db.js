const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Akash4328:Akash123@cluster0.22ezauk.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async() => {
    try {


        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected');

        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        global.food_items = await foodItemsCollection.find({}).toArray();
        global.foodCategory = await foodCategoryCollection.find({}).toArray();

        console.log('Fetched food items:', global.food_items);
        console.log('Fetched food categories:', global.foodCategory);


    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = mongoDB;