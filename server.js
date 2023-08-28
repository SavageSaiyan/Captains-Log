require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require('method-override')

// CONNECT WITH MONGOOSE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // remove useCreateIndex: true
  });
  
  mongoose.connection.once("open", () => {
    console.log("connected to mongoDB");
  });

  //MIDDLEWARE
app.use((req, res, next) => {
    console.log("I run for all routes!");
    next();
  });
  //this allows the body of a post request
  app.use(express.urlencoded({ extended: false }));
  //method override Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
  app.use(methodOverride('_method'))


  //New
  app.get('/', (req, res)=>{
    
  })