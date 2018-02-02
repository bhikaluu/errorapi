const  mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/data'||process.argv.MONGOLAB_URI);

module.exports={
  mongoose
}
