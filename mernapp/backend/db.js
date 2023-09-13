const mongoose = require('mongoose');

const mongoURI ='mongodb://flashfood:zen06744@ac-98izcjp-shard-00-00.uvntn2i.mongodb.net:27017,ac-98izcjp-shard-00-01.uvntn2i.mongodb.net:27017,ac-98izcjp-shard-00-02.uvntn2i.mongodb.net:27017/flashfoodmern?tls=true&replicaSet=atlas-m162sj-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    const foodItemsCollection = mongoose.connection.db.collection('food_items');
    const foodCategoryCollection = mongoose.connection.db.collection('food_Category');

    const foodItemsData = await foodItemsCollection.find({}).toArray();
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    global.food_items = foodItemsData;
    global.foodCategory = foodCategoryData;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;
