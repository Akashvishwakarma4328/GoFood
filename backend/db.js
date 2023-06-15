const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Akash4328:Akash123@cluster0.22ezauk.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async() => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports = mongoDB;