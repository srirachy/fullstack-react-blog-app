const express = require('express');
const logger = require('morgan');
const db = require('./models');
const mongoo = require('mongoose');
mongoo.connect('mongodb://localhost:27017/blog');

const app = express();
const PORT = process.env.PORT || 9000;

// console.log(mongoo);

// middleware
app.use(express.urlencoded({extended: true})); // dinosaurtoy/ref=sr_1_1?crid=32USSU0830BG&keywords=dinosaur+toy&qid=1659563967&s=apparel&sprefix=dinosaur+to%2Cfashion-mens%2C151&sr=1-1
app.use(express.json()); // allows the data in post/put to be parsed and understood by server
app.use(logger('dev')); //setups logging in dev only
app.use(express.static('public')); // basically looks in param before actual routes, will change later cuz we dont wanna use public

// get creates/listens routes to first parameter name and responses to the route
app.get('/api/posts', async (req, res) => {
  // console.log('hit the route ciz we wanna verify we jhit prroperly');
  // console.log(req.url);
  const posts = await db.Post.find().populate('community'); //populate is good to translate hashed values to actual values
  //db.Post.create()
  console.log(posts);
  res.send('a message');
});

app.listen(PORT, () => {
  console.log('server now listening');
});
