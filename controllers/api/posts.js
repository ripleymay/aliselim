const Post = require('../../models/post');

module.exports = {
  create
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