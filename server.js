require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

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
    res.render('New')
  })

  //Create
  app.post('/',  async (req, res)=>{
    const newView = await View.create
    console.log("the created view", req.body);
    res.send('received')
  })


  app.listen(3000, (req, res) => {
    console.log("listening");
  });
  
