const Book = require("../model/book.model");
const Comment = require ('../model/comment.model')


exports.getAllBooks = (req, res) => {
  Book.find()
    .then(([rows]) => {
      // console.log(rows)
      res.render("books", { model: rows });
    })
    .catch((err) => console.error(err.message));
  
};

exports.getAllBlog = (req, res) => {
  Book.find()
    .then(([rows]) => {
      // console.log(rows)
      res.render("articleIndex", { model: rows });
    })
    .catch((err) => console.error(err.message));
  
};



exports.getCreateBook = (req, res) => {
  res.render("create", { model: {} });
};

exports.postCreateBook = (req, res) => {
  const { Title, Author, Comments ,Date, Likes } = req.body;

  const newBook = new Book(Title, Author, Comments,Date,Likes);
  newBook
    .save()
    .then(() => {
      res.redirect("/books/all");
    })
    .catch((err) => console.error(err.message));
};

exports.getEditBookById = (req, res) => {
  const id = req.params.id;
  console.log(id)
  Book.findById(id)
    .then(([row]) => {
      res.render("edit", { model: row[0] });
    })
    .catch((err) => console.error(err.message));
};

exports.getToOneArticlePage = (req, res) => {
  const id = req.params.id;
  console.log(id)
  Book.findById(id)
    .then(([row]) => {
      res.render("indieArticle", { model: row[0] },
      );
    })
    .catch((err) => console.error(err.message));
};


exports.getToOneArticlePage2 = async(req,res,next) =>{
  const id = req.params.id;
  
  const articlePrimeData = await Book.findById(id)
  const commentData = await Comment.findById(id)
  console.log(articlePrimeData[0])
  console.log(commentData[0])
  res.render("indieArticle",{
    model: articlePrimeData[0][0],
    modelC: commentData[0]
  })

}

exports.postEditBookById = (req, res) => {
  const id = req.params.id;
  const { Title, Author, Comments,Date,Likes } = req.body;

  const dataToUpdate = { id, Title, Author, Comments,Date,Likes };

  Book.updateOne(dataToUpdate).then(() => {
    res.redirect("/books/all")
  }).catch((err) => console.error(err.message));
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;

  Book.deleteOne(id).then(() => {
    res.redirect("/books/all")
  }).catch((err) => console.error(err.message));
};


exports.addLike = (req, res)=>{
  const id = req.params.id;

  Book.likePlusOne(id).then(()=>{res.redirect("/books/all")}).catch((err) => console.error(err.message))
  
  
}

exports.addLikeB = (req, res)=>{
  const id = req.params.id;

  Book.likePlusOne(id).then(()=>{res.redirect("/books/blog")}).catch((err) => console.error(err.message))
  
  
}

exports.addLikeIndiePage = async(req, res , next)=>{
  const id = req.params.id;
  const likeData = await Book.likePlusOne(id)
  const articlePrimeData = await Book.findById(id)
  const commentData = await Comment.findById(id)
  
  console.log(articlePrimeData[0])
  console.log(commentData[0])
  res.render("indieArticle",{
    model: articlePrimeData[0][0],
    modelC: commentData[0]
  })
}

exports.addCommentIndiePage = async(req, res , next)=>{
  const id = req.params.id;

  const {comment } = req.body;
  const newComment = new Comment (id, comment)
 

  await newComment.save()
  console.log(req.body)
  const articlePrimeData = await Book.findById(id)
  const commentData = await Comment.findById(id)
  
  console.log(articlePrimeData[0])
  console.log(commentData[0])
  res.render("indieArticle",{
    model: articlePrimeData[0][0],
    modelC: commentData[0]
  })
}