const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://FoodLake:ZVnqW6U2YxEPuB2r@cluster0.nt74tlp.mongodb.net/FoodLake?retryWrites=true&w=majority'
//? se pehle db name khud mention karna  
const mongoDB = async () => {
  //printing data
  await mongoose.connect(mongoURI);
  console.log('Connected');

  const foodItems = mongoose.connection.collection('food_items');

  try {
    const data = await foodItems.find({}).toArray();

    const foodCategory = mongoose.connection.collection('food_category');
    const catData = await foodCategory.find({}).toArray();
    global.food_items = data;
    global.food_category = catData;
    // console.log(data);
    // global.food_items = data;
    // console.log(global.food_items);
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoDB;