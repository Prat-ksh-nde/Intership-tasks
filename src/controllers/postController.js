let posts = []; // in-memory storage

// GET all posts
exports.getAllPosts = (req, res) => {
  res.status(200).json(posts);
};

// GET single post
exports.getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.status(200).json(post);
};

// CREATE post
exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: 'Title and content are required'
    });
  }

  const newPost = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
};

// UPDATE post
exports.updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  res.status(200).json(post);
};

// DELETE post
exports.deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== id);

  res.status(200).json({ message: 'Post deleted successfully' });
};
