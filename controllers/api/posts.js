const Post = require('../../models/post');

module.exports = {
  create,
  getAll,
  detail,
};

async function create(req, res) {
    const post = new Post();
    post.title = req.body.title;
    post.category = req.body.category;
    post.image = req.body.image;
    post.link = req.body.link;
    post.body = req.body.body;
    await post.save();
    res.json(post);
}

async function getAll(req, res) {
  const posts = await Post.find({category: req.params.category});
  res.json(posts);
}

async function detail(req, res) {
  let post = await Post.findById(req.params.id);
  res.json(post);
}