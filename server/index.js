const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const db = require('./models');
const router = express.Router();
const mongoo = require('mongoose');
mongoo.connect('mongodb://localhost:27017/blog');

const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.urlencoded({extended: true})); // dinosaurtoy/ref=sr_1_1?crid=32USSU0830BG&keywords=dinosaur+toy&qid=1659563967&s=apparel&sprefix=dinosaur+to%2Cfashion-mens%2C151&sr=1-1
app.use(express.json()); // allows the data in post/put to be parsed and understood by server
app.use(logger('dev')); //setups logging in dev only
app.use(express.static('public')); // basically looks in param before actual routes, will change later cuz we dont wanna use public
app.use(cors());

// get creates/listens routes to first parameter name and responses to the route
app.get('/api/posts', async (req, res) => {
  console.log(req);
  // const posts = await db.Post.find().populate('community');
  const posts = await db.Post.find()
  console.log(posts);
  res.send(posts);
});

app.get('/api/posts/:id', async (req, res) => {
  // if obj not found else 404
  const findPost = await db.Post.findOne({
    _id: req.params.id,
  });
  // console.log(findPost);
  res.send(findPost);
});

app.get('/api/communities', async (req, res) => {
  const communities = await db.Community.find();
  // add try catches, bareminimum add console.log for errors in routes
  res.send(communities);
});

app.get('/api/comments', async (req, res) => {
  const comments = await db.Comment.find();
  res.send(comments);
});

app.get('/api/profiles', async (req, res) => {
  const profiles = await db.Profile.find();
  res.send(profiles);
});

app.post('/api/communities', async (req, res) => {
  const comm = new db.Community(req.body);
  const dbComm = await comm.save();
  res.send(dbComm);
});

app.post('/api/posts', async (req, res) => {
  const newPost = new db.Post(req.body);
  const dbPost = await newPost.save();
  res.send(dbPost);
});

app.delete('/api/posts/:id', async (req, res) => {
  await db.Post.findOneAndDelete({
    _id: req.params.id,
  });
});

app.delete("/api/posts/delete/:id",async(req,res)=>{
  const data = await db.Post.findByIdAndDelete(req.params.id);
  res.send("Deleted")
})

app.listen(PORT, () => {
  console.log('server now listening');
});
