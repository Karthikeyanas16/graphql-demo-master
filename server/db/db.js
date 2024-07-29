const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/trainingdb';


        // Connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  // Connect to MongoDB
    mongoose.connect(uri, options); 

// Connection event handlers
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + uri);
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

const productSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    }, 
    ratings: {
        type: Array,
        required: false
    }
})
const productsModel = mongoose.model('products', productSchema, 'inventory');

// get, post, delete, put

// productsModel.find().then((data) => console.log(data)).catch((err) => console.log(err));
module.exports = productsModel;