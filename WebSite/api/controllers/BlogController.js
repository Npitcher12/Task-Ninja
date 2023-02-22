const blog_index = (req, res) => {
  blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.view('blogs/index', { blogs: result, title: 'All Tasks' });
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_details = (req, res) => {
  const id = req.params.id;
  blog.find({where: {id: id}})
    .then(result => {
      res.view('blogs/details', { blog: result[0], title: 'Task Details' });
    })
    .catch(err => {
      console.log(err);
      res.view('404', { title: 'Task not found' });
    });
}

const blog_create_get = (req, res) => {
  res.view('blogs/create', { title: 'Create a new task' });
}

const blog_create_post = (req, res) => {
  blog.create(req.body)
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
}

const blog_delete = (req, res) => {
  const id = req.params.id;
  blog.destroy({where: {id: id}})
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  blog_index, 
  blog_details, 
  blog_create_get, 
  blog_create_post, 
  blog_delete
}