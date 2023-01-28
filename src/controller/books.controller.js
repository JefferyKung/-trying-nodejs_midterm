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
    // .then(Comment.findById(id).then(([row2]) => {
    //     console.log(row2)
    //     res.render("indieArticle", { modelC: row2 });
    //     }))
    .catch((err) => console.error(err.message));
};

exports.getToOneArticlePage3 = (req, res) => {
  const id = req.params.id;
  let view_data = {};
  console.log(id)
  Book.findById(id)
    .then(([book_row]) => {
      view_data.books = book_row;
      // console.log(book_row)
      return Comment.findById(id);
    })
    .then(([comment_row])=>{
      view_data.comments = comment_row;
      // console.log(console.log(book_row))
    })
    .then(
      console.log(view_data.books)
      // console.log(view_data.books);
      // res.render("indieArticle",{
      //   model: view_data.books[0],
      //   modelC: view_data.comments
      // })
    )
    .then(
      res.redirect('/')
    )
    .catch((err) => console.error(err.message));
};

// exports.getToOneArticlePage2 = async(req,res,next) =>{
//   const id = req.params.id;
  // res.render("indieArticle",{
  //   model: (await Book.findById(id))[0],
  //   modelC: (await Comment.findById(id))
  // })

// }

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